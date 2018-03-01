var gulp = require('gulp');
var sass = require('gulp-sass');
var scss = require('gulp-scss');
var autoPrefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var sourcemap = require('gulp-sourcemap');
var connect = require('gulp-connect');



gulp.task('server', function () {
    connect.server({
        livereload: true
    });
});

gulp.task('sass', function () {
    return gulp.src('app/styles/*.sass')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoPrefixer({
            browsers: ['last 2 version'],
            cascade: false
        }))
        .pipe(concat('app/app.css'))
        .pipe(gulp.dest('./'))
        .pipe(connect.reload());
});

// gulp.task('js', function () {
//     return gulp.src('assets/js/**/*.js')
//     .pipe(concat('mainproject.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('./'))
//         .pipe(connect.reload())
// });

gulp.task('livereload', function () {
    gulp.src(['./app.css', 'app/**/**/*.js', './html'])
        .pipe(connect.reload())
});

gulp.task('html', function () {
    gulp.src('./html')
        .pipe(connect.reload())
});


gulp.task('watch', function () {
    gulp.watch('app/styles/*.sass', ['sass']);
    gulp.watch('app/**/**/*.js', ['js']);
    gulp.watch('*./html', ['html']);
})

gulp.task('default', ['sass', 'server', 'html', 'watch', 'livereload']);
