const gulp = require('gulp');
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const ngAnnotate = require('gulp-ng-annotate');
const sass = require('gulp-sass');
const htmlMin = require('gulp-minify-html');
const ngHtml2Js = require("gulp-ng-html2js");
const runSequence = require('run-sequence');
const browserSync = require('browser-sync');

const paths = require('../paths');
const compilerOptions = require('../babelOptions');

gulp.task('build', function (callback) {
  return runSequence(
    'clean',
    ['theme', 'sass', 'html', 'es6', 'move'],
    callback
  );
});

gulp.task('es6', function () {
  return gulp.src(paths.source, { base: 'src' })
    .pipe(plumber())
    .pipe(changed(paths.output, { extension: '.js' }))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(babel(compilerOptions))
    .pipe(ngAnnotate({
      sourceMap: true,
      gulpWarnings: false
    }))
    .pipe(sourcemaps.write("/sourcemaps", { sourceRoot: '/src' }))
    .pipe(gulp.dest(paths.output))
});

gulp.task('html', function () {
  return gulp.src(paths.templates)
    .pipe(plumber())
    .pipe(changed(paths.output, { extension: '.html' }))
    .pipe(htmlMin({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe(ngHtml2Js({
      template: "import angular from 'angular';\n" +
        "export default angular.module('<%= moduleName %>', []).run(['$templateCache', function($templateCache) {\n" +
        "   $templateCache.put('<%= template.url %>',\n    '<%= template.prettyEscapedContent %>');\n" +
        "}]);\n"
    }))
    .pipe(babel(compilerOptions))
    .pipe(gulp.dest(paths.output))
});

gulp.task('sass', function () {
  return gulp.src(paths.sass)
    .pipe(plumber())
    .pipe(changed(paths.output, {extension: '.css'}))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.output))
    .pipe(browserSync.reload({ stream: true }));
});
