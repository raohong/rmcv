'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const fs = __importStar(require('fs'));
const path = __importStar(require('path'));
const p_queue_1 = __importDefault(require('p-queue'));
const util_1 = require('util');
const child_process_1 = require('child_process');
const execAsync = util_1.promisify(child_process_1.exec);
/**
 * 从 less var 生成 css variable
 * @param {*} target
 * @param {*} cwd
 */
const generate = async (component, componentStyleDir) => {
  const files = await fs.promises.readdir(componentStyleDir);
  const filename = path.join(componentStyleDir, 'var.less');
  const varFilename = 'css-declare.less';
  const importFilename = path.join(componentStyleDir, 'index.tsx');
  if (!files.includes('var.less')) {
    console.log('Skipped : ', component);
    return;
  }
  const content = (await fs.promises.readFile(filename)).toString();
  const targetFilename = path.join(componentStyleDir, varFilename);
  const rawList = content.split(/(?:\r?\n)|\r/);
  const list = rawList
    .filter(
      (item) =>
        !/@import/.test(item) &&
        item.includes('@') &&
        !item.includes('prefix-cls'),
    )
    .map((item) => item.replace(/^@/, ''));
  const declarationList = [];
  const constsMap = {};
  const constsList = [];
  list.forEach((item) => {
    const [name] = item.split(':').map((v) => v.trim());
    if (name.includes('-const')) {
      const constName = name.replace('-const', '');
      constsMap[constName] = true;
      constsList.push(`@${item}`);
      declarationList.push(`.declare(${constName}, @${name});`);
      const rawDeclarationIndex = rawList.findIndex((rawItem) =>
        rawItem.includes(`@${constName}:`),
      );
      // 是否已经定义 css var
      // 没有插入定义
      if (rawDeclarationIndex === -1) {
        const rawConstIndex = rawList.findIndex((rawItem) =>
          rawItem.includes(name),
        );
        rawList.splice(
          rawConstIndex + 1,
          0,
          `@${constName}: ~\`varv('${constName}')\`;`,
        );
      }
    } else if (!constsMap[name]) {
      declarationList.push(`.declare(${name}, @${name});`);
    }
  });
  const result = [
    `@import '../../style/core/mixins/var.less';`,
    `@import './var.less';`,
    '',
    '// automatic generated via cli',
    '',
    constsList.join('\n'),
    '',
    ':root{',
    declarationList.join('\n'),
    '}',
  ].join('\n');
  const importContent = (await fs.promises.readFile(importFilename))
    .toString()
    .split(/(?:\r?\n)|\r/)
    .filter((item) => item.trim() && !item.includes(varFilename));
  importContent.push(`import './${varFilename}'`);
  await Promise.all([
    fs.promises.writeFile(targetFilename, result),
    fs.promises.writeFile(importFilename, importContent.join('\n')),
    fs.promises.writeFile(filename, rawList.join('\n')),
  ]);
  const allFiles = [targetFilename, importFilename, filename];
  await Promise.all(
    allFiles.map((item) => execAsync(`prettier --write '${item}'`)),
  );
};
const delcareCSSVar = async (root) => {
  const baseDir = path.join(root, 'packages', 'components', 'src');
  const dirs = fs.readdirSync(baseDir);
  const components = dirs.filter((item) => {
    if (fs.statSync(path.join(baseDir, item)).isFile()) {
      return false;
    }
    const files = fs.readdirSync(path.join(baseDir, item));
    return files.includes('index.tsx') && files.includes('style');
  });
  const queue = new p_queue_1.default({ concurrency: 6 });
  await Promise.all(
    components.map((item) =>
      queue.add(() => generate(item, path.join(baseDir, item, 'style'))),
    ),
  );
};
exports.default = delcareCSSVar;
