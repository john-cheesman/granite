var gulp,
    sass,
    autoprefixer,
    minifycss,
    del,
    config;

gulp         = require('gulp');
sass         = require('gulp-ruby-sass');
autoprefixer = require('gulp-autoprefixer');
minifycss    = require('gulp-minify-css');
del          = require('del');

config = {
    src: 'src/scss',
    dest: 'dist/css',
    autoprefixer: [
        'last 2 versions'
    ]       
};

gulp.task('sass', function() {
    return sass(config.src)
        .pipe(autoprefixer(config.autoprefixer))
        .pipe(minifycss())
        .pipe(gulp.dest(config.dest));
});

gulp.task('clean', function() {
    return del(config.dest);
});

gulp.task('watch', function() {
    return gulp.watch(config.src, ['sass']);
});

gulp.task('default', ['clean', 'sass', 'watch']);