const gulp = require('gulp');
const paths = require('../paths');
const del = require('del');
const vinylPaths = require('vinyl-paths');

gulp.task('clean', function () {
  return gulp.src([paths.output])
    .pipe(vinylPaths(del));
});
