var gulp,
    sass,
    autoprefixer,
    minifycss,
    del,
    browsersync,
    config;

gulp         = require('gulp');
sass         = require('gulp-ruby-sass');
autoprefixer = require('gulp-autoprefixer');
minifycss    = require('gulp-minify-css');
del          = require('del');
browsersync  = require('browser-sync');

config = {
    sass: {
        src: 'src/scss',
        dest: 'dist/css',
        autoprefixer: [
            'last 2 versions'
        ]       
    },
    serve: {
        server: {
            baseDir: 'dist'
        }
    }
};

gulp.task('sass', function() {
    return sass(config.sass.src)
        .pipe(autoprefixer(config.autoprefixer))
        .pipe(minifycss())
        .pipe(gulp.dest(config.sass.dest));
});

gulp.task('clean', function() {
    return del(config.sass.dest);
});

gulp.task('serve', function() {
    return browsersync.init(config.serve);
});

gulp.task('watch', function() {
    return gulp.watch(config.src, ['sass']);
});

gulp.task('default', ['clean', 'sass', 'serve', 'watch']);