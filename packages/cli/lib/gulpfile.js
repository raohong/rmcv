const gulp = require('gulp');
const path = require('path');
const fs = require('fs');
const rm = require('util').promisify(require('rimraf'));

const autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');
const merge = require('merge2');
const gulpTS = require('gulp-typescript');
const rollup = require('rollup');
const { babel: rollupBabel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const rollupCommonjs = require('@rollup/plugin-commonjs');
const rollupPostcss = require('rollup-plugin-postcss');
const rollupTypescript = require('rollup-plugin-typescript2');
const { terser } = require('rollup-plugin-terser');
const multiInput = require('@rollup/plugin-multi-entry');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');

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

gulp.task('clean', async () => {
  await Promise.all([rm('lib/*'), rm('es/*'), rm('dist/*')]);
});

gulp.task('script:cjs', () => {
  const packageJson = require(path.join(process.env.GULPCWD, 'package.json'));

  return rollup
    .rollup({
      input: ['src/index.tsx', 'src/style/index.tsx'],
      output: {
        globals: {
          react: 'React',
        },
      },
      plugins: [
        multiInput({
          entryFileName: path.basename(packageJson.umd, path.extname(packageJson.umd)),
        }),
        peerDepsExternal(),
        rollupTypescript({
          declarationDir: 'dist',
        }),
        nodeResolve({
          extensions: ['.js', '.ts', '.tsx'],
        }),
        rollupCommonjs(),
        rollupPostcss({
          plugins: [autoprefixer()],
          extract: true,
          sourceMap: true,
        }),
        rollupBabel({
          babelHelpers: 'inline',
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
        }),
      ],
    })
    .then((bundle) =>
      Promise.all([
        bundle.write({
          format: 'umd',
          globals: {
            react: 'React',
          },
          file: packageJson.umd,
          exports: 'named',
          name: packageJson.libaryName,
          sourcemap: true,
        }),
        bundle.write({
          format: 'umd',
          globals: {
            react: 'React',
          },
          file: packageJson.umd.replace(/(\.\w+$)/, '.min$1'),
          exports: 'named',
          name: packageJson.libaryName,
          sourcemap: true,
          plugins: [terser()],
        }),
      ]),
    );
});

gulp.task('script:lib', () => {
  const result = gulp.src(...scriptEntry).pipe(babel(getBabelConfig()));

  return result.pipe(gulp.dest('lib'));
});

gulp.task('script:es', () => {
  const result = gulp.src(...scriptEntry).pipe(babel(getBabelConfig(false)));

  return result.pipe(gulp.dest('es'));
});

gulp.task('style:copy', () => {
  return gulp.src('src/**/*.less').pipe(gulp.dest('es')).pipe(gulp.dest('lib'));
});

gulp.task('dts', () => {
  const tsconfig = require(path.join(path.dirname(path.resolve('..')), 'tsconfig.json'));

  const tsResult = gulp.src(...scriptEntry).pipe(
    gulpTS({
      ...tsconfig.compilerOptions,
      module: 'ESNext',
      declaration: true,
      emitDeclarationOnly: true,
    }),
  );

  return tsResult.pipe(gulp.dest('es')).pipe(gulp.dest('lib'));
});

exports.default = gulp.series(
  'clean',
  gulp.parallel('script:lib', 'script:es', 'script:cjs', 'style:copy', 'dts'),
);
