var gulp = require("gulp");
var sass = require("gulp-sass");
const browserSync = require("browser-sync").create();



// SASS
function compilaSass(){
    return gulp.src('./src/scss/style.scss')
    .pipe(sass({
          outputStyle: 'compressed'
      }))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream());
};
gulp.task('sass', compilaSass);



// Watch
function wacthSass(){
    gulp.watch('./src/scss/*.scss', compilaSass);
    gulp.watch('*.html').on('change', browserSync.reload);
};
gulp.task('watch', wacthSass);



//Browser-sync
function browser(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
};
gulp.task('browser-sync', browser);



gulp.task('default', gulp.parallel('watch', 'browser-sync'));
