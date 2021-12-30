import rmCallback from 'rimraf';
import { promisify } from 'util';

const rm = promisify(rmCallback);

export default rm;
