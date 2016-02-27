const gulp = require('gulp');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');
const paths = require('../paths');

gulp.task('lint', function () {
  return gulp.src(paths.source)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
