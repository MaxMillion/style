var gulp = require("gulp");
var sass = require("gulp-ruby-sass");
var gulpif = require("gulp-if");
var concat = require("gulp-concat");
var gulpFilter = require("gulp-filter");
var header = require("gulp-header");

var bundles = require("./bundles");

gulp.task("default", function () {
  for (var bundle in bundles) {
    // var filter = gulpFilter("*.sass");

    gulp.src(bundles[bundle])
        // .pipe(filter)
        .pipe(sass())
        // .pipe(filter.restore())
        .pipe(concat(bundle + ".css"))
        .pipe(header("@charset \"utf-8\";\n"))
        .pipe(gulp.dest("test"))
  }
});
