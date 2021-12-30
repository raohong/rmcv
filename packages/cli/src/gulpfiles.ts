import * as path from 'path';
import gulp from 'gulp';
import babel from 'gulp-babel';
// @ts-ignore
import * as tsb from 'gulp-tsb';

import { rm } from './utils';

const scriptEntry: [string[], { ignore: string[] }] = [
  ['src/**/*.{ts,tsx}'],
  {
    ignore: ['**/demos/**/*', '**/__tests__/**/*', '**/tests/**/*'],
  },
];

const getBabelConfig = (modules?: boolean) => ({
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
  await Promise.all([rm('lib/*'), rm('es/*')]);
});

gulp.task('script:lib', () => {
  // @ts-ignore
  const result = gulp.src(...scriptEntry).pipe(babel(getBabelConfig()));

  return result.pipe(gulp.dest('lib'));
});

gulp.task('script:es', () => {
  // @ts-ignore
  const result = gulp.src(...scriptEntry).pipe(babel(getBabelConfig(false)));

  return result.pipe(gulp.dest('es'));
});

gulp.task('style:copy', () => {
  return gulp.src('src/**/*.less').pipe(gulp.dest('es')).pipe(gulp.dest('lib'));
});

gulp.task('dts', () => {
  const compilation = tsb.create(
    path.join(path.dirname(path.resolve('..')), 'tsconfig.json'),
    {
      module: 99,
      declaration: true,
      emitDeclarationOnly: true,
    },
  );

  const tsResult = gulp.src(...scriptEntry).pipe(compilation());

  return tsResult.pipe(gulp.dest('es')).pipe(gulp.dest('lib'));
});

exports.default = gulp.series(
  'clean',
  gulp.parallel('script:lib', 'script:es', 'style:copy', 'dts'),
);
