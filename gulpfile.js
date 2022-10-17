const path = require('path');
const gulp = require('gulp');
const babel = require('gulp-babel');
const tsb = require('gulp-tsb');
const deleteAsync = require('del');

const scriptEntry = [
  ['src/**/*.{ts,tsx}'],
  {
    ignore: ['**/demos/**/*', '**/__tests__/**/*', '**/tests/**/*'],
  },
];

const dest = 'dist';

gulp.task('clean', async () => {
  await deleteAsync(`${dest}/**/*`);
});

gulp.task('script', () => {
  const result = gulp.src(...scriptEntry).pipe(
    babel({
      presets: ['@babel/preset-typescript'],
    }),
  );

  return result.pipe(gulp.dest(dest));
});

gulp.task('style', () => {
  return gulp.src('src/**/*.less').pipe(gulp.dest(dest));
});

gulp.task('dts', () => {
  const compilation = tsb.create(
    path.join(path.dirname(path.resolve('..')), 'tsconfig.json'),
    {
      emitDeclarationOnly: true,
      declaration: true,
    },
  );

  const tsResult = gulp.src(...scriptEntry).pipe(compilation());

  return tsResult.pipe(gulp.dest(dest));
});

exports.default = gulp.series('clean', gulp.parallel('script', 'style', 'dts'));
