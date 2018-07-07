var gulp = require('gulp'),
  imgMin = require('gulp-imagemin'),
  del = require('del'),
  usemin = require('gulp-usemin'),
  rev = require('gulp-rev'),
  nano = require('gulp-cssnano'),
  uglify = require('gulp-uglify'),
  sync = require('browser-sync').create();

gulp.task('previewDist',['build'], function() {
  sync.init({
    notifiy: false,
    server: {
      baseDir: "dist"
    }
  });
});

gulp.task('deleteDist', function() {
  return del('./dist');
});

gulp.task('optImages', ['deleteDist'], function() {
  return gulp.src(['./app/assets/img/**/*', '!./app/assets/img/icons', '!./app/assets/img/icons/**/*'])
    .pipe(imgMin({
      progressive: true,
      interlaced: true,
      multipass: true
    }).on('error', function(e) {
      console.log(e.toString());
    }))
    .pipe(gulp.dest("./dist/assets/img"));
});

gulp.task('usemin', ['deleteDist'], function() {
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [function() {
        return rev()
      }, function() {
        return nano();
      }],
      js: [function() {
        return rev();
      }, function() {
        return uglify();
      }]
    }))
    .pipe(gulp.dest("./dist"));
})
gulp.task('build', ['deleteDist', 'usemin', 'optImages']);
