var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),

    concatJs = require("gulp-concat"),
    uglify = require('gulp-uglify'),

    imgOptimize = require('gulp-imagemin');


    sass.compiler = require('node-sass');

gulp.task('sassToCss', function () {
    return gulp.src('styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./styles'));
});

gulp.task('concatMinifyCss', function () {
    // return gulp.src('styles/**/*.css')  --- все файлы в папке styles
    return gulp.src(['styles/plugin.css','styles/main.css'])
        .pipe(concatCss("styles/bundle.css"))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
        .pipe(minifyCSS())  //перенесли с task 'minifyCssTask' для оптимизации
        .pipe(gulp.dest('dist/'));
});

// gulp.task('minifyCssTask', function () {
//     return gulp.src('./dist/styles/bundle.css')
//         .pipe(minifyCSS())
//         .pipe(gulp.dest('dist/styles'));
// });

gulp.task("concatMinifyJs", function () {
    return gulp.src(['./js/jquery-3.3.1.js', './js/main.js'])
        .pipe(concatJs('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"));
});

gulp.task('imgOptimizeTask', function (done) {
    gulp.src('./img/**/*')
        .pipe(imgOptimize([
                imgOptimize.gifsicle({interlaced: true}),
                imgOptimize.jpegtran({progressive: true}),
                imgOptimize.optipng({optimizationLevel: 4}),
                imgOptimize.svgo({
                    plugins: [
                        {removeViewBox: true},
                        {cleanupIDs: false}
                    ]
                })
            ]))
        .pipe(gulp.dest('dist/images'));
    done();
});

gulp.task('default', gulp.series('sassToCss', 'concatMinifyCss'));