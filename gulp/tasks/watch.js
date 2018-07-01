var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sync = require('browser-sync').create();

gulp.task('watch', function () {
    sync.init({
        notifiy: false,
        server: {
            baseDir: "app"
        }
    });
    watch('./app/index.html', function () {
        sync.reload();
    });
    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('cssInject');
    });
    watch('./app/assets/js/**/*.js', function () {
        gulp.start('scriptsRefresh');
    });
});
gulp.task('cssInject', ['styles'], function () {
    return gulp.src('./app/temp/styles/style.css')
        .pipe(sync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function () {
    sync.reload();
});
