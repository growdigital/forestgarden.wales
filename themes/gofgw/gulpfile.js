const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const	concat = require('gulp-concat');
const presetenv = require('postcss-preset-env');
const	del = require('del');
const	minifyCSS = require('gulp-clean-css');
const	imagemin = require('gulp-imagemin');
const	postcss = require('gulp-postcss');
const	rename = require('gulp-rename');
const	uglify = require('gulp-uglify');

// Define paths. The order is important.
const	paths = {
	css: [
    './node_modules/normalize-css/normalize.css',
    './src/01-variables.css',
    './src/02-base/css/*.css',
    './src/03-objects/**/**/*.css',
    './src/04-components/**/**/*.css',
    './src/05-utilities/**/**/*.css',
    './src/06-shame.css'
	],
	js: [
    './src/02-base/js/*.js',
    './src/03-objects/**/**/*.js',
    './src/04-components/**/**/*.js',
    './src/05-utilities/**/**/*.js',
	]
};

// CSS task
gulp.task('css', function () {
  const processors = [
    presetenv
  ];
  gulp
    .src(paths.css)
    .pipe(concat('app.css'))
    .pipe(postcss(processors))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./static/assets/'));
});

// JS uglify
gulp.task('js', () =>
  gulp
    .src(paths.js)
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./static/assets/'))
);

// Watch task
gulp.task('watch', function() {
	gulp.watch(paths.css, ['css']);
	gulp.watch(paths.js, ['js']);
});

// Browsersync
gulp.task('browser-sync', function () {
  browserSync.init({
    proxy: "http://localhost:1313/"
  });
});

// Default task
gulp.task('default', [
  'browser-sync',
	'css',
  'js',
  'watch'
]);
