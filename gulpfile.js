var imagemin = require('gulp-imagemin');
var gulp = require('gulp');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');

//minify css
var styleSRC = './src/css/style.css';
var styleDIST = './dist/css/';

gulp.task('styles', async function () {
  gulp.src(styleSRC)
    .pipe(gulp.dest(styleDIST));
});

//minify image
gulp.task('images', async function () {
  gulp.src('./src/images/*')
    .pipe(imagemin(
      {
        interlaced: true,
        progressive: true,
        optimizationLevel: 5,
        svgoPlugins: [
          {
            removeViewBox: true
          }
        ]
      }))
    .pipe(gulp.dest('./dist/images'));
});

//minify html
gulp.task('htmlpage', async function () {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist/'));
});

// Gulp task to minify JavaScript files
gulp.task('scripts', function() {
    return gulp.src('./build/js/script.js')
      // Minify the file
      .pipe(uglify())
      // Output
      .pipe(gulp.dest('./dist/js'))
});
