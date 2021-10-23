const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const { exec } = require('child_process');

const execAsync = promisify(exec);

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

  await Promise.all(
    components.map((item) => generate(item, path.join(baseDir, item, 'style'))),
  );
};

module.exports = delcareCSSVar;
