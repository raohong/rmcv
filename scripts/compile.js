const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

function compile() {
  const cwd = process.cwd();
  const dirs = fs.readdirSync(path.join(cwd, 'packages'));

  dirs.forEach((dir) => {
    const current = path.join(cwd, 'packages', dir);
    const packageJSON = require(path.join(current, 'package.json'));

    if (packageJSON.scripts && packageJSON.scripts.build) {
      console.log('build:', packageJSON.name);
      execSync('yarn build', {
        cwd: current,
      });
    }
  });
}

compile();
