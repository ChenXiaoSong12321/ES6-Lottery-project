import gulp from 'gulp';
import gulpif from 'gulp-if';
// 引入启动一个脚本作为服务器的包
import liveserver from 'gulp-live-server';
import args from './util/args';
// 创建sever服务器
gulp.task('serve',(cb)=>{
	// 如果不是出于监听状态，直接返回回调函数
	if (!args.watch) {return cb()}
		// --harmony在当前命令行下执行这个脚本，server/bin/www是脚本
	var server = liveserver.new(['--harmony','server/bin/www'])
	server.start();

	// 监听模板引擎，在js和ejs发生改变时
	gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function (file) {
		// 将这个改变通知服务器
		// 通知到了服务器文件发生了改变
		server.notify.apply(server,[file]);

	});
	// 监听路由是否发生改变
	// server/router/**/*.js服务器脚本文件，做接口用的
	// server/app.js整个服务启动的入口文件
	gulp.watch(['server/routes/**/*.js','server/app.js'],function () {
		server.start.bind(server)()
	});

})