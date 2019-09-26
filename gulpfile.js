var gulp = require("gulp");
var sass = require("gulp-sass");
var babel = require("gulp-babel");

gulp.task('sass', function(){
    return gulp.src('./src/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('babel', function(){
    return gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./dist/js/'))
});