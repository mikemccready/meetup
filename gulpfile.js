'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function () {

  browserSync.init({
    server: './public'
  });

  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('public/**/*.html').on('change', browerSync.reload);

})


gulp.task('sass', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);