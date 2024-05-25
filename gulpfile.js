const { src, dest, watch, series } = require("gulp")
const sass = require("gulp-sass")(require("sass"))

let ext = "scss" // scss sass

function buildStyles() {
    return src(`./src/*.${ext}`).pipe(sass()).pipe(dest("css"))
}

async function watchTask() {
    watch([`./src/*.${ext}`], {ignoreInitial: false}, buildStyles)
}

exports.default = series(watchTask) 

// run `npm run dev` to run sass compiler
