var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var connect = require('gulp-connect');
/**
 * 声明文件路径
 */
var paths = {
	less: ['./src/**/*.less','!./node_modules','!./node_modules/**','!./node_modules/**/*.less']
};
/**
 * 定义编译less的任务
 */
gulp.task('less', function () {
  gulp.src(paths.less)
      .pipe(plumber())
      .pipe(less())
      .pipe(gulp.dest('./dist/'))
      .pipe(connect.reload());
});
/**
 * 利用gulp启动本地服务，实时更新
 */
gulp.task('server', function() {
  connect.server({
    livereload: true,
    port: 2333
  });
});
/**
 * 开启监听，文件有修改自动执行任务
 */
gulp.task('watch',function(){
  gulp.watch('./src/**/*.less', ['less']);
  gulp.watch('./index.html', ['less']);
})
/**
 * 定义默认任务，命令行里输入gulp即可执行
 */
gulp.task('default', ['less','watch','server']);