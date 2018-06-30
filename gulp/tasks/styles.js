var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    prefixer = require('autoprefixer'),
    nested = require('postcss-nested'),
    vars = require('postcss-simple-vars'),
    mixins = require('postcss-mixins'),
    cssImport = require('postcss-import'),
    rgbahex = require('postcss-hexrgba');

gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/style.css')
        .pipe(postcss([cssImport, mixins, vars, nested, rgbahex, prefixer, minify]))
        .on('error', function (errorInfo) {
            console.log(errorInfo.toString())
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});
