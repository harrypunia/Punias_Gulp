var gulp = require('gulp'),
  imgMin = require('gulp-imagemin'),
  del = require('del'),
  usemin = require('gulp-usemin');

gulp.task('deleteDist', function() {
  return del('./dist');
});

gulp.task('optImages', ['deleteDist'], function() {
  return gulp.src(['./app/assets/img/**/*', '!./app/assets/img/icons', '!./app/assets/img/icons/**/*'])
    .pipe(imgMin({
      progressive: true,
      interlaced: true,
      multipass: true
    }).on('error', function(e){
      console.log(e.toString());
    }))
    .pipe(gulp.dest("./dist/assets/img"));
});

gulp.task('usemin', ['deleteDist'], function() {
  return gulp.src('./app/index.html')
    .pipe(usemin())
    .pipe(gulp.dest("./dist"));
})
gulp.task('build', ['deleteDist', 'usemin', 'optImages']);
