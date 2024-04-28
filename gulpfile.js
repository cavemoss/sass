const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return src('./index.scss').pipe(sass()).pipe(dest('css'))
}

function watchTask() {
    watch(['./index.scss'], {ignoreInitial: false}, buildStyles)
}

exports.default = series(watchTask) 

// run `npx gulp` to run sass compiler