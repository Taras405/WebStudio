const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

gulp.task('styles', () => {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', () => {
    gulp.watch('sass/**/*.scss', gulp.series('styles'));
});

gulp.task('default', gulp.series('styles', 'watch'));
