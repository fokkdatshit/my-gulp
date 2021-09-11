## Simple Gulp task runner project setup

This gulpfile contains the following functions:

- ✔️  [Browser-Sync](https://www.npmjs.com/package/browser-sync): Automatically reload browser on file changes.
- ✔️  [Gulp SASS](https://www.npmjs.com/package/gulp-sass): Compile SASS to CSS.
- ✔️  [Gulp Uglify ES](https://www.npmjs.com/package/gulp-uglify-es): Minify JS files.
- ✔️  [Gulp Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer): Prefix CSS.
- ✔️  [Gulp ImageMin](https://www.npmjs.com/package/gulp-imagemin): Minify PNG, JPEG, GIF and SVG images.
- ✔️  [Gulp HtmlMin](https://www.npmjs.com/package/gulp-htmlmin): Gulp plugin to minify HTML.
- ✔️  [Gulp Sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps): Sourcemap support for Gulp.


## Tasks 

-   **default**: Run functions from above and watch for file changes
-   **build**: Minify, compile and copy every file into 'dist/'

## Get started

Requirements:

-   ✔️  [NPM (Node)](https://nodejs.org/en/)  installed
-   ✔️  [Gulp-CLI](https://gulpjs.com/)  installed

1.  Clone project:
    
    -   `> git clone git@github.com:fokkdatshit/my-gulp.git`
2.  Navigate into project:
    
    -   `> cd project`
3.  Install dependencies:
    
    -   `> npm install (or 'npm i')`
4.  Run Gulp tasks
    
    -   `1. gulp`
    -   `2. gulp build`
