#!/usr/bin/env node

import { Command } from 'commander';
import buildLib from './buildLib';
import generteCssVar from './generteCssVar';

const program = new Command();

program.command('b').action(() => {
  buildLib();
});

program.command('d-css-var').action(async () => {
  await generteCssVar(process.cwd());
});

async function main() {
  await program.parseAsync(process.argv);
}

main();
