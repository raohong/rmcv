'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const path = __importStar(require('path'));
const gulp_1 = __importDefault(require('gulp'));
const gulp_babel_1 = __importDefault(require('gulp-babel'));
// @ts-ignore
const tsb = __importStar(require('gulp-tsb'));
const utils_1 = require('./utils');
const scriptEntry = [
  ['src/**/*.{ts,tsx}'],
  {
    ignore: ['**/demos/**/*', '**/__tests__/**/*', '**/tests/**/*'],
  },
];
const getBabelConfig = (modules) => ({
  presets: [
    [
      '@babel/preset-env',
      modules === false
        ? {
            modules: false,
          }
        : undefined,
    ].filter(Boolean),
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: ['@babel/plugin-transform-runtime'],
});
gulp_1.default.task('clean', async () => {
  await Promise.all([utils_1.rm('lib/*'), utils_1.rm('es/*'), utils_1.rm('dist/*')]);
});
gulp_1.default.task('script:lib', () => {
  // @ts-ignore
  const result = gulp_1.default
    .src(...scriptEntry)
    .pipe(gulp_babel_1.default(getBabelConfig()));
  return result.pipe(gulp_1.default.dest('lib'));
});
gulp_1.default.task('script:es', () => {
  // @ts-ignore
  const result = gulp_1.default
    .src(...scriptEntry)
    .pipe(gulp_babel_1.default(getBabelConfig(false)));
  return result.pipe(gulp_1.default.dest('es'));
});
gulp_1.default.task('style:copy', () => {
  return gulp_1.default
    .src('src/**/*.less')
    .pipe(gulp_1.default.dest('es'))
    .pipe(gulp_1.default.dest('lib'));
});
gulp_1.default.task('dts', () => {
  const compilation = tsb.create(
    path.join(path.dirname(path.resolve('..')), 'tsconfig.json'),
    {
      module: 99,
      declaration: true,
      emitDeclarationOnly: true,
    },
  );
  const tsResult = gulp_1.default.src(...scriptEntry).pipe(compilation());
  return tsResult.pipe(gulp_1.default.dest('es')).pipe(gulp_1.default.dest('lib'));
});
exports.default = gulp_1.default.series(
  'clean',
  gulp_1.default.parallel('script:lib', 'script:es', 'style:copy', 'dts'),
);
