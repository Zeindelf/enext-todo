
const gulp     = require('gulp');
const gulpIf   = require('gulp-if');
const imageMin = require('gulp-imagemin');

module.exports = (args, src, dist) => {
    /**
     * Copia/minifica imagens
     */
    gulp.task('images', () => {
        return gulp.src(`${src}/assets/img/*`)
            .pipe(gulpIf(args.production, imageMin()))
            .pipe(gulp.dest(`${dist}/assets/img`));
    });

    /**
     * Copia fontes
     */
    gulp.task('fonts', () => {
        return gulp.src(`${src}/assets/fonts/*`)
            .pipe(gulp.dest(`${dist}/assets/fonts`));
    });
};
