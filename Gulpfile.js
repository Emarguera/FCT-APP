'use strict';
var gulp = require('gulp'),
    nib = require('nib'),
    connect = require('gulp-connect');
var nodemon = require('gulp-nodemon');
var connect = require('gulp-connect');

// Servidor web de desarrollo
gulp.task('connect', function () {
  connect.server({
    root:'public',
    port: 8000,
    livereload: true
  });
  nodemon();
});
// recarga de css
gulp.task('css', function () {
  gulp.src('./public/css/*.css')
    .pipe(connect.reload())
})
// recarga de html
gulp.task('html',function(){
  gulp.src('./public/*.html')
    .pipe(connect.reload())
});
// recarga de js
gulp.task('js', function () {
  gulp.src('./public/components/*.js')
    .pipe(connect.reload())
});

gulp.task('watch', function () {
  gulp.watch([
    './public/*.css',
    './public/components/*.css',
    './public/components/**/*.css',
    './public/components/**/**/*.css'
  ], ['css']);

  gulp.watch([
    './public/*.js',
    './public/components/*.js',
    './public/components/**/*.js',
    './public/components/**/**/*.js',
    './api/*.js',
    './api/components/*.js',
    './api/components/**/*.js',
    './api/components/**/**/*.js'
  ], ['js']);

  gulp.watch([
    './public/*.html',
    './public/components/*.html',
    './public/components/**/*.html',
    './public/components/**/**/*.html'
  ], ['html']);
})

gulp.task('serve', ['connect','css','html','js','watch'])
// npm install -g gulp gulp-cli nodemon
