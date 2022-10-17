import chalk from 'chalk';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const execAsync = promisify(exec);

const build = async (target: string) => {
  const content = await fs.promises.readFile(path.join(target, 'package.json'));
  const { name } = JSON.parse(content.toString());

  await execAsync(`pnpm gulp --cwd ${target}`);

  console.log(chalk.green(`Build ${name} successfully`));
};

const buildAll = async () => {
  const root = path.resolve('packages');
  const dirs = fs.readdirSync(root).filter((item) => {
    const name = path.join(root, item, 'package.json');

    return fs.statSync(path.join(root, item)).isDirectory() && fs.existsSync(name);
  });

  await Promise.all(dirs.map((item) => build(path.join(root, item))));
};

buildAll();
