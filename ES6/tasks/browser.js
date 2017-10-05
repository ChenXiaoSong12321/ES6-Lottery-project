import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

gulp.task('browser',(cb)=>{
	// 如果没有watch函数做监听就直接回调
	if (!args.watch) {return cb()}
	// 监听app/**/*.js发生改变，就自动调用scripts构建脚本文件，
	// 将es6转换成es5或es3，scripts完成以后写道server目录下的文件
	gulp.watch('app/**/*.js',['scripts']);
	gulp.watch('app/**/*.ejs',['pages']);
	gulp.watch('app/**/*.css',['css']);
});
