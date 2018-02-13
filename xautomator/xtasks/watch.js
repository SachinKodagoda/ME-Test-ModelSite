var gulp = require('gulp'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "xoutput"
    }
  });

  watch('./xoutput/index.html', function() {
    browserSync.reload();
  });

  watch('./xinput/xcss/**/*.css', function() {
    gulp.start('cssInject');
  });

  watch('./xinput/xjs/**/*.js', function() {
    gulp.start('scriptsRefresh');
  });

});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./xoutput/assets/styles/style.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh',['scripts'], function() {
  browserSync.reload();
});
