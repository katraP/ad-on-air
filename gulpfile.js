/**
 * Created by Kateryna_Porkhun on 4/20/2016.
 */
var gulp = require('gulp');

var scss = require('gulp-scss');
var livereload = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean');
var runSequence = require('gulp-run-sequence');

var build = {
    scripts: 'dist/js/**/*.js',
    css: 'dist/css/**/*.css'
}

var src = {
    scripts: 'src/js/**/*.js',
    scss: 'src/scss/**/*.scss'
}

gulp.task('sass:clean', function() {
    return gulp.src(build.css, {read: false})
        .pipe(clean());
});


gulp.task('js:clean', function() {
    return gulp.src(build.scripts, {read: false})
        .pipe(clean());
});

gulp.task('scss:compile', ['sass:clean'], function() {
    return gulp.src('src/scss/main.scss')
        .pipe(scss())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(livereload());
});

gulp.task('img:compile', function() {
   return gulp.src('src/img/*.*')
       .pipe(gulp.dest('./dist/img'));
});

gulp.task('js:compile', ['js:clean'], function() {
    return gulp.src(src.scripts)
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(src.scss, ['scss:compile']);
    gulp.watch(src.scripts, ['js:compile']);
});

gulp.task('default', function() {
    return runSequence('scss:compile', 'js:compile', 'img:compile', 'watch');
});