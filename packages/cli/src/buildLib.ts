import * as path from 'path';
import { exec } from './utils';

const build = () => {
  exec('gulp', process.cwd(), [
    '-f',
    path.join(__dirname, 'gulpfile.js'),
    '--cwd',
    process.cwd(),
  ]);
};

export default build;
