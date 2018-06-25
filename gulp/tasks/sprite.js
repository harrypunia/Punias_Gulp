var gulp = require('gulp'),
    sprite = require('gulp-svg-sprite'),
    del = require('del'),
    rename = require('gulp-rename');

var config = {
    mode: {
        css: {
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './gulp/template/sprite.css'
                }
            }
        }
    }
}

gulp.task('clean', function () {
    return del('./app/assets/img/sprites');
})

gulp.task('createSprite', ['clean'], function () {
    return gulp.src('./app/assets/img/icons/**/*.svg')
        .pipe(sprite(config))
        .pipe(gulp.dest('./app/temp/tempSprite/'));
});

gulp.task('copySpriteSheet', ['createSprite'], function () {
    return gulp.src('./app/temp/tempSprite/css/**/*')
        .pipe(gulp.dest('./app/assets/img/sprites'));
});

gulp.task('copySpriteCss', ['createSprite'], function () {
    return gulp.src('./app/temp/tempSprite/css/**/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('cleanAfter', ['copySpriteSheet', 'copySpriteCss'], function () {
    return del('./app/temp/tempSprite');
});

gulp.task('icons', ['clean', 'createSprite', 'copySpriteSheet', 'copySpriteCss', 'cleanAfter']);
