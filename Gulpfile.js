var gulp          = require('gulp');
var gutil         = require('gulp-util');
var sourcemaps    = require('gulp-sourcemaps');
var source        = require('vinyl-source-stream');
var buffer        = require('vinyl-buffer');
var watchify      = require('watchify');
var browserify    = require('browserify');

var css           = require('atomify-css');

gulp.task('css', function () {
  css({
    entry: './src/css/style.css',
    output: './dist/css/style.css',
    assets: {
      dest: 'dist/css/assets',
      prefix: 'assets/'
    }
  });
});

gulp.task('browserify', function() {
  var bundler = watchify(browserify('./src/index.js', watchify.args));
  // add any other browserify options or transforms here
  bundler.transform('brfs');
  bundler.on('update', bundle); // on any dep update, runs the bundler
  bundler.on('log', gutil.log); // output build logs to terminal
  bundle();
  function bundle() {
      return bundler.bundle()
        // log errors if they happen
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        // optional, remove if you dont want sourcemaps
        .pipe(buffer())
        .pipe(sourcemaps.init({
          loadMaps: true
        })) // loads map from browserify file
        .pipe(sourcemaps.write('./')) // writes .map file
        //
        .pipe(gulp.dest('./dist'));
    }
});


gulp.task('default', ['browserify', 'css'], function() {});
