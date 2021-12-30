#!/usr/bin/env node
'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const commander_1 = require('commander');
const buildLib_1 = __importDefault(require('./buildLib'));
const generteCssVar_1 = __importDefault(require('./generteCssVar'));
const program = new commander_1.Command();
program.command('b').action(() => {
  buildLib_1.default();
});
program.command('d-css-var').action(async () => {
  await generteCssVar_1.default(process.cwd());
});
async function main() {
  await program.parseAsync(process.argv);
}
main();
