var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify');


gulp.task('deleteDistFolder',function(){
  return del("./dist");
});

gulp.task('copyGeneralFiles',['deleteDistFolder'],function(){
  var pathsToCopy = [
    './xoutput/**/*',
    '!./xoutput/index.html',
    '!./xoutput/assets/images/**',
    '!./xoutput/assets/js/**',
    '!./xoutput/assets/styles/**'
  ]
  return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./dist"));
});

gulp.task('optimizeImages',['deleteDistFolder'],function(){
  return gulp.src(['./xoutput/assets/images/**/*','!./xoutput/assets/images/icons','!./xoutput/assets/images/icons/**/*'])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task('usemin',['deleteDistFolder'],function(){
  return gulp.src("./xoutput/index.html")
  .pipe(usemin({
    css: [function(){return rev()},function(){return cssnano()}],
    js: [function(){return rev()},function(){return uglify()}]
  }))
  .pipe(gulp.dest("./dist"));
});

gulp.task('build',['deleteDistFolder','copyGeneralFiles','optimizeImages','usemin']);
