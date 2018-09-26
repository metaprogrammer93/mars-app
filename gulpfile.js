// PLUGINS
var gulp = require('gulp');
var webpack = require('webpack-stream');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var historyApiFallback = require('connect-history-api-fallback');

var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var jscs = require('gulp-jscs');
var history = require('history');
var reactRouter = require('react-router');

// PATHS
var jsxMain = './src/**/*.jsx';
var sassMain = './src/sass/*.scss';
var htmlPath = './src/index.html';
var basePath = './src';
var buildPath = './build';

// SASS ---------------------------------------------
gulp.task('sass', function(){
  gulp.src(sassMain)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sass())//compiles
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(minifyCSS())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(buildPath));

});

// COMPILE REACT ---------------------------------------------------
gulp.task('compile-react', function() {
    // gulp.src(pathNAme)
    return gulp.src(jsxMain)
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(webpack({
            output: {
              filename: 'main.js'
            },
            module: {
              loaders: [{
                          test: /\.jsx?$/,
                          exclude: /(node_modules)/,
                          loader: 'babel-loader',
                          query: {
                            presets: ['es2015', 'react']
                          }
                        }]
            }
        }))
        .pipe(gulp.dest(buildPath));
});
// COPY HTML  -----------------------------------------------------

gulp.task('copy-html', function(){
  gulp.src(htmlPath)
  .pipe(gulp.dest(buildPath));
});

// BROWSER SYNC -----------------------------------------------------
gulp.task('browser-sync', function() {

    browserSync.init({
      // this could say server: buildPath
      server: {
        baseDir: buildPath,
        middleware: [historyApiFallback()],
        online: true
      }
    });
    gulp.watch([sassMain], ['sass']);
    gulp.watch([jsxMain], ['compile-react']);
    gulp.watch([htmlPath], ['copy-html']);
    gulp.watch([buildPath+'/main.js', buildPath+'/index.html', buildPath+'/style.min.css',]).on('change', browserSync.reload);
});


// CALL THE GULP TASK -----------------------------------------------
gulp.task('default', ['sass','compile-react', 'browser-sync']);
