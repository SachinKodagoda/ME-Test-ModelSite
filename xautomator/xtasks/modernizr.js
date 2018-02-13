var gulp = require('gulp'),
 modernizr = require('gulp-modernizr');

gulp.task('modernizr',function(){
  return gulp.src(['./xoutput/assets/styles/**/*.css','./xoutput/assets/js/**/*.js'])
    .pipe(modernizr({
      "options": [
        "setClasses"
      ]
    }))
    .pipe(gulp.dest('./xoutput/assets/js/'));
});
