var gulp = require('gulp');
var concatCss = require('gulp-concat-css');

gulp.task('contactCssTask', function () {
    return gulp.src('assets/**/*.css')
        .pipe(concatCss("styles/bundle.css"))
        .pipe(gulp.dest('out/'));
});