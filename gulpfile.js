const gulp         = require('gulp');
const browserSync  = require('browser-sync').create();
const sourcemaps   = require('gulp-sourcemaps');
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concatCss    = require('gulp-concat-css');
const cleanCSS     = require('gulp-clean-css');
const uglify       = require('gulp-uglify');
const version      = require('gulp-version-number');
const babel        = require('gulp-babel');
const concat       = require('gulp-concat');
const tinypng      = require('gulp-tinypng-unlimited');
const clean        = require('gulp-clean');
const runSequence  = require('run-sequence');
const removeHtmlComments = require('gulp-remove-html-comments');



/* **************** SERVE **************** */

gulp.task('serve', ['sass', 'js'], function () {
    browserSync.init({
        server: "src/"
    });
    gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch('src/script/*.js', ['js']).on('change', browserSync.reload);
});

gulp.task('js', () =>
    gulp.src('src/script/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('src/js'))
        .pipe(browserSync.stream())
);

gulp.task('sass', function() {
return gulp.src("src/scss/*.scss")
.pipe(sourcemaps.init())   
.pipe(sass().on('error', sass.logError))
.pipe(sourcemaps.write())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(concatCss("style.css"))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

/* **************** PROD **************** */

gulp.task('cssMin', function() {
    return gulp.src("src/css/*.css")
        .pipe(cleanCSS())
        .pipe(gulp.dest("dist/css"));
});

gulp.task('jsMin', function() {
    return gulp.src("src/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"));
});

gulp.task('imgCopy', () => {
    return gulp.src(['src/img/**/*'])
        .pipe(gulp.dest('dist/img'));

});

gulp.task('imgTiny', function () {
    return gulp.src('src/img/**/*.@(png|jpg|jpeg)')
    .pipe(tinypng())
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('htmlProd', () => {
    return gulp.src('src/*.html')
      .pipe(version({
            'value': '%MDS%',
            'append': {
                'key': 'v',
                'to': ['css', 'js']
            }
        }))
        .pipe(removeHtmlComments())
        .pipe(gulp.dest('dist'));
});

gulp.task('deleteDist', function () {
    return gulp.src('./dist', {read: false})
        .pipe(clean());
});


/* **************** RUN **************** */  

// --- For production
gulp.task('prod', function(callback) {
    runSequence('deleteDist',
                ['cssMin', 'jsMin', 'htmlProd', 'imgCopy'],
                 'imgTiny',
                callback);
});

// --- For serve
gulp.task('default', ['serve']);