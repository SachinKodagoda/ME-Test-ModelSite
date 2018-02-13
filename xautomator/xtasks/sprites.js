var gulp = require('gulp'),
  svgSprite = require('gulp-svg-sprite'),
  rename = require('gulp-rename'),
  del = require('del'),
  svg2png = require('gulp-svg2png');

var config = {
  shape: {
    spacing: {
      padding: 1
    }
  },
  mode: {
    css: {
      variables:{
        replaceSvgWithPng: function(){
          return function(sprite, render){
            return render(sprite).split('.svg').join('.png');
          }
        }
      },
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './xautomator/xtemp/spriteTemplate.css'
        }
      }
    }
  }
};

gulp.task('beginClean', function() {
  return del(['./xautomator/xtemp/sprites', './xoutput/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'], function() {
  return gulp.src('./xoutput/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./xautomator/xtemp/sprites/'));
});

gulp.task('createPngCopy',['createSprite'],function(){
  return gulp.src('./xautomator/xtemp/sprites/css/*.svg')
  .pipe(svg2png())
  .pipe(gulp.dest('./xautomator/xtemp/sprites/css/'));
});

gulp.task('copySpriteGraphic', ['createPngCopy'], function() {
  return gulp.src('./xautomator/xtemp/sprites/css/**/*.{svg,png}')
    .pipe(gulp.dest('./xoutput/assets/images/sprites/'));
});

gulp.task('copySpriteCSS', ['createSprite'], function() {
  return gulp.src('./xautomator/xtemp/sprites/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./xinput/xcss/xmodule/xsprite'));
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function() {
  return del('./xautomator/xtemp/sprites');
});

gulp.task('icons', ['beginClean', 'createSprite','createPngCopy','copySpriteGraphic', 'copySpriteCSS', 'endClean']);
