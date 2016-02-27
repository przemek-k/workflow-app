const gulp = require('gulp');
const paths = require('../paths');
const browserSync = require('browser-sync');

function changed(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch', ['build'], function () {
  gulp.watch([ paths.source ], [ 'es6', browserSync.reload ]).on('change', changed);
  gulp.watch([ paths.html ], [ 'html', browserSync.reload ]).on('change', changed);
  gulp.watch([ paths.sass ], [ 'sass' ]).on('change', changed);
});
