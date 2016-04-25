'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var livereload = require('gulp-livereload');

gulp.task('express', function(){
	var express = require('express');
	var app = express();
	app.use(express.static('./public'));
	app.listen(8080, '0.0.0.0');
});

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('sass', function() {
  	return gulp.src('./sass/*.scss')
  		.pipe(sass(sassOptions).on('error', sass.logError))
  		.pipe(autoprefixer())
  		.pipe(minifycss())
  		.pipe(gulp.dest('./public/css'))
  		.pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();
	return gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('default', ['express', 'sass', 'watch'], function() {

});