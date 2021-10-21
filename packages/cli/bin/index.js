#!/usr/bin/env node

const program = require('commander');
const { build, declareCSSVar } = require('../lib');

program.command('b').action(() => {
  build(process.cwd());
});

program.command('d-css-var').action(async () => {
  await declareCSSVar(process.cwd());
});

async function main() {
  await program.parseAsync(process.argv);
}

main();
