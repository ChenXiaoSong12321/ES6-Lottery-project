// 引入gulp
import gulp from 'gulp';
// 引入gulp-if，gulp语句中做if判断的
import gulpif from 'gulp-if';
// gulp中处理文件拼接的
import concat from 'gulp-concat';
// 打包
import webpack from 'webpack';
// gulp处理文件流，结合webpack-stream来处理
import gulpWebpack from 'webpack-stream';
// 重命名做标志的
import named from 'vinyl-named';
// 文件修改后浏览器自动刷新，热更新
import livereload from 'gulp-livereload';
// 处理文件信息流的
import plumber from 'gulp-plumber';
// 对文件重命名的
import rename from 'gulp-rename';
// 压缩js、css
import uglify from 'gulp-uglify';
// 命令行工具输出的包
import {log,colors} from 'gulp-util';
// 对命令行参数解析
import args from './util/args';

gulp.task('scripts',()=>{
	return gulp.src(['app/js/index.js'])

	.pipe(plumber({
		errorHandle:function(){

		}
	}))
	// 重命名
	.pipe(named())
	// 对js进行编译
	.pipe(gulpWebpack({
		module:{
			loaders:[{
				test:/\.js$/,
				loader:'babel'
			}]
		}
	}),null,(err,stats)=>{
		// 对错误的处理
		log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
			chunks:false
		}))
	})
	// 文件放在哪里，把编译好的文件放在这个路径
	.pipe(gulp.dest('server/public/js'))
	// 编译压缩，把生成的文件复制了一份
	.pipe(rename({
		basename:'cp',
		extname:'.min.js'
	}))
	// 压缩，配置如何压缩
	.pipe(uglify({
		compress:{properties:false},
		output:{'quote_keys':true}
	}))
	// 存储的某个地方
	.pipe(gulp.dest('server/public/js'))
	// 监听文件变化后刷新
	.pipe(gulpif(args.watch,livereload()))
})