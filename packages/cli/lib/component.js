const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const _ = require('lodash');

async function main() {
  const { name } = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Component Name',
      async validate(input) {
        if (!input) {
          return 'Please input';
        }

        if (!/^(?:[A-Z][a-z]+)+$/.test(input)) {
          return 'Component should be PascalCase';
        }

        return true;
      },
    },
  ]);

  const componentFileName = _.kebabCase(name);
}

main();
