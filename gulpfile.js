'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('serve', ['sass', 'lint', 'copy-html', 'copy-images', 'copy-views', 'scripts'], function () {
  browserSync.init({
    server: './dist'
  });
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('**/*.js', ['lint']);
  gulp.watch('./index.html', ['copy-html']);
  gulp.watch('./views/*.html', ['copy-views']);
  gulp.watch('./dist/index.html').on('change', browserSync.reload);
  gulp.watch('./dist/views/*.html').on('change', browserSync.reload);

})

gulp.task('lint', function () {
return gulp.src(['**/*.js','!node_modules/**']) 
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('copy-views', function(){
  gulp.src('./views/*.html')
    .pipe(gulp.dest('./dist/views'));
});

gulp.task('copy-html', function(){
  gulp.src('./index.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy-images', function(){
  gulp.src('./img/*')
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('scripts', function() {
  gulp.src('./js/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('scripts-dist', function() {
  gulp.src('./js/**/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('sass', function() {
  gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);