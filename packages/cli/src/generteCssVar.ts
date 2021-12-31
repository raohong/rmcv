import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import PQueue from 'p-queue';
import { promisify } from 'util';
import { exec } from 'child_process';

const execAsync = promisify(exec);

/**
 * 从 less var 生成 css variable
 * @param {*} target
 * @param {*} cwd
 */
const generate = async (component: string, componentStyleDir: string) => {
  const files = await fs.promises.readdir(componentStyleDir);
  const filename = path.join(componentStyleDir, 'var.less');
  const varFilename = 'css-declare.less';
  const lessFileame = path.join(componentStyleDir, 'index.less');

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
  const declarationList: string[] = [];
  const constsMap: Record<string, boolean> = {};
  const constsList: string[] = [];

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

  let indexList: string[] = [];

  try {
    indexList = (await fs.promises.readFile(lessFileame))
      .toString()
      .split(/\r|\n/);
    indexList = indexList.filter((item) => !item.includes(varFilename));

    if (indexList.length === 0) {
      indexList.push(`@import './${varFilename}';`);
    } else {
      const index = indexList.findIndex(
        (item, i, list) =>
          item.includes('@import') &&
          (!list[i + 1]?.includes('@import') || !list[i + 1]),
      );

      indexList.splice(index + 1, 0, `@import './${varFilename}';`);
    }
  } catch {
    indexList.push(`@import './${varFilename}';`);
  }

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

  await Promise.all([
    fs.promises.writeFile(targetFilename, result),
    fs.promises.writeFile(filename, rawList.join('\n')),
    fs.promises.writeFile(lessFileame, indexList.join('\n')),
  ]);

  const allFiles = [targetFilename, filename, lessFileame];

  await Promise.all(
    allFiles.map((item) => execAsync(`prettier --write '${item}'`)),
  );
};

const delcareCSSVar = async (root: string) => {
  const baseDir = path.join(root, 'packages', 'components', 'src');
  const dirs = fs.readdirSync(baseDir);
  const components = dirs.filter((item) => {
    if (!fs.statSync(path.join(baseDir, item)).isDirectory()) {
      return false;
    }

    const files = fs.readdirSync(path.join(baseDir, item));

    return files.includes('index.tsx') && files.includes('style');
  });
  const queue = new PQueue({ concurrency: 2 * os.cpus().length });

  await Promise.all(
    components.map((item) =>
      queue.add(() => generate(item, path.join(baseDir, item, 'style'))),
    ),
  );
};

export default delcareCSSVar;
