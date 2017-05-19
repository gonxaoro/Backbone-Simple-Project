var gulp = require('gulp'),
  sass = require('gulp-sass'),
  minifyCss = require('gulp-minify-css'),
	minify = require('gulp-minify'),
  concat = require('gulp-concat'),
  order = require('gulp-order'),
  rename = require('gulp-rename'),
  connect = require('gulp-connect'),
  uglify = require('gulp-uglify');

    var path = {
      jade: ['app/jade/*.jade'],
      html: 'public/',
    	sass: ['app/sass/**/*.scss'],
    	css: 'public/css/',
    	js: ['app/javascript/**/*.js'],
    	jsDest: 'public/js/',
    	fonts: 'app/sass/fonts/*.*',
    	fontsDest: 'public/css/fonts/'
    };


gulp.task('connect', function() {
  connect.server({
    root: 'public',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src('./app/*.css')
    .pipe(connect.reload());
});

gulp.task('styles', function() {
	gulp.src(path.sass)
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('main.css'))
		.pipe(rename({
			basename: 'main',
			extname: '.min.css'
		}))
		.pipe(minifyCss({
            keepSpecialComments: 0
        }))
		.pipe(gulp.dest(path.css))
    .pipe(connect.reload());
});

gulp.task('fonts', function() {
	gulp.src(path.fonts)
		.pipe(gulp.dest(path.fontsDest));
});

gulp.task('scripts', function() {
    return gulp.src(path.js)
        .pipe(order([
          "lib/jquery*.js",
          "lib/underscore-min.js",
          "lib/backbone-min.js",
          "lib/backbone.localStorage.js",
          "models/*.js",
          "collections/*.js",
          "views/*.js",
          "routes/*.js"
        ]))
        .pipe(concat('scripts.js'))
        .pipe(rename('scripts.min.js'))
        /*.pipe(uglify())*/
        .pipe(gulp.dest(path.jsDest))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./public/html/*.html'], ['html']);
  gulp.watch(['./app/sass/*.scss'], ['styles']);
  gulp.watch(['./app/javascript/**/*.js'], ['scripts']);
});

gulp.task('default', ['html', 'styles','scripts','fonts','connect','watch']);
