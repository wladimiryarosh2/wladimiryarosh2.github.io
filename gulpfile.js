var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('watch');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src('scss/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))

});
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
        notify:false
    })
})
gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch('scss/*.scss', ['sass']);
    // gulp.watch('index.html', ['browserSync']);
    // Other watchers
});
