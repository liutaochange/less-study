var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');

var paths = {
	less: ['./**/less/*.less','!./node_modules','!./node_modules/**','!./node_modules/**/*.less']
};
gulp.task('less', function () {
  return gulp.src(paths.less)
  .pipe(plumber())
	.pipe(less())
	.pipe(gulp.dest('./dist/'));
});


gulp.task('default', ['less'], function() {
  // 将你的默认的任务代码放在这
  console.log('success')
});