'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const child_process_1 = require('child_process');
const exec = (name, cwd, args = []) => {
  const child = child_process_1.spawn(name, args, {
    stdio: 'inherit',
    cwd,
  });
};
exports.default = exec;
