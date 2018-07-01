var gulp = require('gulp'),
    imgMin = require('gulp-imagemin');

gulp.task('optImages', function () {
    return gulp.src('./app/assets/img/**/*', '!./app/assets/img/icons', '!./app/assets/img/icons/**/*')
        .pipe(imgMin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest("./dist/assets/img"));
});

gulp.task('build', ['optImages']);