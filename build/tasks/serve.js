const gulp = require('gulp');
const browserSync = require('browser-sync');
const historyApiFallback = require('connect-history-api-fallback');

gulp.task('serve', ['watch'], function (done) {
  browserSync({
    open: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      middleware: [ historyApiFallback() ]
    }
  }, done);
});
