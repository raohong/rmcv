'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const rimraf_1 = __importDefault(require('rimraf'));
const util_1 = require('util');
const rm = util_1.promisify(rimraf_1.default);
exports.default = rm;
