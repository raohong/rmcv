#!/usr/bin/env node

const program = require('commander');
const { build } = require('../lib');

program.command('b').action(() => {
  build(process.cwd());
});

async function main() {
  await program.parseAsync(process.argv);
}

main();
