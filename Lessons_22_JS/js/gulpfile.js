const gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    pleeease = require('gulp-pleeease'),
    pump = require('pump'),
    scss = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('js', function (cb) {
    pump([
        gulp.src('src/js/*.js'),
        concat('script.js'),
        uglify(),
        gulp.dest('dist/js')
    ], cb);
});

gulp.task('scss', function () {
    gulp.src('src/scss/main.scss')
        .pipe(scss({errLogToConsole: true}))
        .pipe(pleeease({
            autoprefixer: {
                browsers: ['> 0.01%']
            }
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream:true}));
})

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: './'
        }
    })
});

gulp.task('bs-reload', function () {
    browserSync.reload();
})

gulp.task('default', ['browser-sync', 'js'] , function() {
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/scss/**/*.scss', ['scss', 'bs-reload']);
    gulp.watch('*.html', ['bs-reload']);
});
