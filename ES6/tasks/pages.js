import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages',()=>{
	// app文件下所有的ejs文件
	return gulp.src('app/**/*.ejs')
		.pipe(gulp.dest('server'))
		// 是否热更新
		.pipe(gulpif(args.watch,livereload()))
})
