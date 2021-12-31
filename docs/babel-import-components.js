const path = require('path');
const root = path.dirname(__dirname);

module.exports = function customName(name) {
  return path.join(root, 'packages', 'components/src', name);
};
