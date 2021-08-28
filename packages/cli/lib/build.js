const path = require('path');
const { execSync } = require('child_process');

const build = () => {
  process.env.GULPCWD = process.cwd();

  execSync(`gulp -f ${path.join(__dirname, 'gulpfile.js')} --cwd ${process.cwd()}`);
};

module.exports = build;
