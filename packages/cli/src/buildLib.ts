import * as path from 'path';
import { exec } from './utils';

const build = () => {
  exec('gulp', process.cwd(), [
    '-f',
    path.join(__dirname, 'gulpfiles.js'),
    '--cwd',
    process.cwd(),
  ]);
};

export default build;
