const path = require('path');
// html-webpack-plugin将html文件托管在内存中
const htmlWebpackPlugin = require('html-webpack-plugin');
// 判断当前的环境是生产环境吗？
const isProd = process.NODE_ENV === 'production';
// 每次打包前，自动删除之前一版的打包文件clean-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
	mode: isProd ? 'production' : 'development',
	entry: {
		// 入口文件，main.ts
		app: path.resolve(__dirname, 'src/main.ts')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		// filename: 'bundle.js'
		// contenthash、chunkhash和hash的区别，见文档：https://blog.csdn.net/bubbling_coding/article/details/81561362
		filename: '[name].[hash:8].js'
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html'
		}),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				include: path.resolve(__dirname, 'src')
			}
		]
	},
	resolve: {
		// 扩展名
		extensions: ['.ts', '.tsx', '.js']
	},
	devtool: isProd
		? 'cheap-module-source-map'
		: 'cheap-module-eval-source-map',
	devServer: {
		host: 'localhost', // 主机名
		stats: 'errors-only', // 打包日志输出输出错误信息
		// 端口号等也可以在package.json文件中已经配置
		port: '3000',
		open: true,
		hot: true // 开启热更新
		// inline: true,
		// open:true,// 是否自动打开默认浏览器
		// contentBase:DIST_PATH,// 发布目录
		// port:'0996',// 控制端口
		// host:'0.0.0.0',// host地址
		// historyApiFallback:true,
		// useLocalIp:true,// 是否用自己的IP
		// proxy:{
		// '/action':'http://127.0.0.1:8080/'
		// }
	}
};
