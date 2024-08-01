const path = require('node:path');
const fs = require('node:fs');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const { upperFirst, template, camelCase } = require('lodash');

const root = path.dirname(__dirname);

/**
 *
 * @param {string} group
 * @param {string} name
 */
function getName(group, name) {
  let str = name;

  if (group === 'outlined') {
    str = name.endsWith('-o')
      ? `${name.replace('-o', '-')}${group}`
      : `${name}-${group}`;
  }
  else if (group === 'filled') {
    str = `${name}-${group}`;
  }

  return upperFirst(camelCase(str));
}

function run() {
  const config = JSON.parse(
    fs.readFileSync(path.join(root, 'src', 'config.json')).toString(),
  );
  const tpl = fs.readFileSync(path.join(root, 'scripts', 'template.tpl')).toString();
  const compiled = template(tpl);
  const imports = [];

  rimraf.sync(path.join(root, 'src', 'icons'));
  mkdirp.sync(path.join(root, 'src', 'icons'));

  const groupData = {};

  Object.entries(config).forEach(([group, list]) => {
    list.forEach((item) => {
      const name = getName(group, item);
      const body = fs
        .readFileSync(path.join(root, 'assets', `${item}.svg`))
        .toString();
      const addedProps = body.replace('<svg', '<svg {...props}');

      groupData[group] = groupData[group] || [];
      groupData[group].push(name);

      const content = compiled({
        name,
        body: addedProps,
      });

      fs.writeFileSync(path.join(root, 'src', 'icons', `${name}.tsx`), content);
      imports.push(`export {default as ${name}} from './icons/${name}'`);
    });
  });
  fs.writeFileSync(
    path.join(root, 'src', 'list.ts'),
    `export default ${JSON.stringify(groupData, null, 2)} as const`,
  );

  imports.push(
    `// eslint-disable-next-line no-restricted-exports\nexport { default } from './components/Icon'`,
  );
  imports.push(`export { default as ICONS} from './list'`);
  imports.push(
    `export type { IconProps, IconComponentProps, RootIconProps} from './interface'`,
  );

  fs.writeFileSync(path.join(root, 'src', 'index.tsx'), imports.join('\n\n'));
}

run();
