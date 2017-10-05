// 引入yargs包
import yargs from 'yargs';

const args = yargs
	// 区分是线上还是线下环境
	.option('production',{
		boolean:true,
		default:false,
		describe:'min all scripts'
	})
	// 控制是否监听开发环境中修改的文件
	.option('watch',{
		boolean:true,
		default:false,
		describe:'watch all files'	
	})
	// 是否详细输出命令行日志
	.option('verbose',{
		boolean:true,
		default:false,
		describe:'log'
	})
	// 强制生成sourcemap
	.option('sourcemaps',{
		describe:'force the creation of sroucemaps'
	})
	// 端口
	.option('port',{
		string:true,
		default:8080,
		describe:'server port'
	})
	
	.argv

	
