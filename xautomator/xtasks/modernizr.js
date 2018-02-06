var gulp = require('gulp'),
 modernizr = require('gulp-modernizr');

gulp.task('modernizr',function(){
  return gulp.src(['./xoutput/styles/**/*.css','./xoutput/js/**/*.css'])
    .pipe(modernizr({
      "options": [
        "setClasses"
      ]
    }))
    .pipe(gulp.dest('./xoutput/js/'));
});
