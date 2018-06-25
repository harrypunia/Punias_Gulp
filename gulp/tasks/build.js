var gulp = require('gulp'),
    imgMin = require('gulp-imagemin');

gulp.task('optImages', function () {
    return gulp.src('./app/assets/img/**/*')
        .pipe(imgMin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest("./dist/assets/img"));
});

gulp.task('build', ['optImages']);
