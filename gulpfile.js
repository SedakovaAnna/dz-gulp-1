var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');

//запуск browser-sync
gulp.task('server', ['styles'], function() {
    browserSync.init({
    	server: { baseDir: './app/'}
    });
    gulp.watch('./app/**/*.html').on('change', browserSync.reload);
    gulp.watch('./app/less/**/*.less', ['styles']);
});

//запуск gulp-less
gulp.task('styles', function() {
    return gulp.src('./app/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['server']);
