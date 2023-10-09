const {src, dest, watch, parallel} = require("gulp");

// CSS
const sass = require("gulp-sass")(require("sass"));// Conector between gulp and sass: gulp-sass dev dependency
const plumber = require('gulp-plumber');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps')

// Images
const webp = require ('gulp-webp');
const imagemin = require('gulp-imagemin');
const cache = require("gulp-cache");
const avif = require('gulp-avif');

// JS
const terser = require('gulp-terser-js')


//COmpiling sass into build/css
function css(done){
    src('src/scss/**/*.scss')// Identify the SASS
        .pipe(sourcemaps.init())
        .pipe(plumber()) // don't stop the workflow and show a consist error in case  
        .pipe(sass())// Compile from the sass script in package.jsnon
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest("build/css")); // Sotre in drive

    done(); // CB that tells gulp when we reach the end of the task
}

// Converting images into webP
function webpVersion(done){
    
    const options = {
        quality : 50
    };
    src('src/img/**/*.{png,jpg}')// Make sure there's no space between the extentions after the coma
        .pipe(webp(options))
        .pipe(dest('build/img'))

    done();
}

// Optimising images 
function images(done){

    const options = {
        optimizationLevel: 3
    };

    src('src/img/**/*.{png,jpg}')
        .pipe(cache(imagemin(options)))
        .pipe(dest('build/img'))

    done()
}

// Converting images into Avif
function avifVersion(done){
    
    const options = {
        quality : 50
    };
    src('src/img/**/*.{png,jpg}')// Make sure there's no space between the extentions after the coma
        .pipe(avif(options))
        .pipe(dest('build/img'))

    done()
}

// Listeing JS files
function javaScript(done){
    src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/js'));

    done();
}

// Watching any changes in the sass and js files to be compiled
function dev(done){
    watch("src/scss/**/*.scss", css);
    watch("src/js/**/*.js", javaScript);

    done();
}


exports.css = css;
exports.js = javaScript;
exports.webpVersion = webpVersion;
exports.images = images;
exports.avifVersion = avifVersion;

// Executing tasks simultaneously
exports.dev = parallel(images, webpVersion, avifVersion, javaScript ,dev);

