'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.exec = exports.rm = void 0;
var rm_1 = require('./rm');
Object.defineProperty(exports, 'rm', {
  enumerable: true,
  get: function () {
    return __importDefault(rm_1).default;
  },
});
var exec_1 = require('./exec');
Object.defineProperty(exports, 'exec', {
  enumerable: true,
  get: function () {
    return __importDefault(exec_1).default;
  },
});
