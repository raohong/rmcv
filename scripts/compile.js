const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

function compile() {
  const cwd = process.cwd();
  const dirs = fs.readdirSync(path.join(cwd, 'packages'));

  dirs.forEach((dir) => {
    const current = path.join(cwd, 'packages', dir);

    if (!fs.statSync(current).isDirectory()) {
      return;
    }

    const packageJSON = JSON.parse(
      fs.readFileSync(path.join(current, 'package.json')).toString(),
    );

    if (packageJSON.scripts && packageJSON.scripts.build) {
      console.log('build:', packageJSON.name);
      execSync('yarn build', {
        cwd: current,
      });
    }
  });
}

compile();
