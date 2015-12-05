"use strict";
 
var gulp = require("gulp");
var sass = require("gulp-sass");
 
gulp.task("sass", function () {
  gulp.src("./salesforce-twitter-challenge-client/assets/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./salesforce-twitter-challenge-client/assets/css/"));
});
 
gulp.task("sass:watch", function () {
  gulp.watch("./salesforce-twitter-challenge-client/assets/scss/*.scss", ["sass"]);
});

gulp.task("default", ["sass:watch"]);