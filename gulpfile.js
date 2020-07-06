const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");
const precss = require("precss");
const autoprefixer = require("autoprefixer");
sass.compiler = require("node-sass");
gulp.task("sass", () => {
  return gulp.src("src/*.scss")
  .pipe(sass())
  .on("error", sass.logError)
  .pipe(sourcemaps.init())
  .pipe(postcss([precss, autoprefixer]))
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest("build/"));
});
gulp.task("sass:watch", function () {
  gulp.watch("src/*.scss", ["sass"]);
});
