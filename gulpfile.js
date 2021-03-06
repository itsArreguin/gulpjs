const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', ()=>
    gulp.src('directory/assets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('directory/assets/css'))
);
