const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', ()=>
    gulp.src('../../dashboard/assets/style-sheets/aerostatic-forms.scss')
    .pipe(sass())
    .pipe(gulp.dest('../../dashboard/assets/style-sheets'))
);
