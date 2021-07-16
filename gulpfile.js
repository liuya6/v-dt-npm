const { src, dest } = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

exports.default = function () {
  return src("src/index.js").pipe(babel()).pipe(uglify()).pipe(dest("lib/"));
};
