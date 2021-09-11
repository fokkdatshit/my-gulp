const { src, dest, watch, parallel, series } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del');
const htmlMin = require('gulp-htmlmin');
const sourcemaps = require('gulp-sourcemaps');

function minifyhtml() {
   return src('app/**/*.html')
      .pipe(htmlMin({
         collapseWhitespace: true,
         removeComments: true
      }))
      .pipe(dest('dist'));
}


function browsersync() {
   browserSync.init({
      server: {
         baseDir: 'app/'
      }
   });
}

function cleanDist() {
   return del('dist/**/*')
}


function images() {
   return src('app/img/**/*')
      .pipe(imagemin([
         imagemin.gifsicle({ interlaced: true }),
         imagemin.mozjpeg({ quality: 75, progressive: true }),
         imagemin.optipng({ optimizationLevel: 5 }),
         imagemin.svgo({
            plugins: [
               { removeViewBox: true },
               { cleanupIDs: false }
            ]
         })
      ]))
      .pipe(dest('dist/img/'))
}

function scripts() {
   return src([
      'node_modules/jquery/dist/jquery.min.js',
      'app/js/main.js'
   ])
      .pipe(sourcemaps.init())
      .pipe(concat('main.min.js'))
      .pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(dest('app/js'))
      .pipe(browserSync.stream())
}

function styles() {
   return src('app/sass/style.sass')
      .pipe(sourcemaps.init())
      .pipe(sass({ outputStyle: 'compressed' }))
      .pipe(concat('style.min.css'))
      .pipe(autoprefixer({
         overrideBrowserslist: ['last 10 version'],
         grid: true
      }))
      .pipe(sourcemaps.write())
      .pipe(dest('app/css'))
      .pipe(browserSync.stream())
}

function build() {
   return src([
      'app/css/style.min.css',
      'app/fonts/**/*',
      'app/js/main.min.js'
   ], { base: 'app' })
      .pipe(dest('dist'))
}

function watching() {
   watch(['app/sass/**/*.sass'], styles);
   watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
   watch(['app/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;
exports.minifyhtml = minifyhtml;
exports.minifyhtml = minifyhtml;

exports.build = series(cleanDist, images, build, minifyhtml);
exports.default = parallel(styles, scripts, browsersync, watching);