/*
* @Author: Elory
* @Date:   2017-10-08 19:38:05
* @Last Modified by:   Elory
* @Last Modified time: 2017-10-09 11:52:15
*/
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
	devtool:'cheap-source-map',
	entry: [
	"webpack-dev-server/client?http://0.0.0.0:9003",
	'webpack/hot/only-dev-server',
	'react-hot-loader/patch',
	'./src/index.js'
	],
	output: {
		path: __dirname + '/dist',
		publicPath: '/dist/',
		filename: 'js/[name].app.js'
	},
	externals:{
		'jquery': 'window.jQuery'
	},
	module:{
		loaders:[
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				// hot-loader v1写法
				/*loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']*/
				loader: 'babel-loader',
				query:{
					presets: ['react','es2015']
				}
			},
			{
				test: /\.(scss|css)$/,
				/*loader: ExtractTextPlugin.extract("style","css!sass")*/
				loader: "style!css!sass"
			},
			{
				test: /\.(html|tpl)$/,
				loader: "html-loader"
			},
		]
	},
	plugins: [
	new webpack.optimize.OccurenceOrderPlugin(),
	/*new ExtractTextPlugin(
		"css/[name].css"
	),*/
	new HtmlWebpackPlugin({
		template: './src/view/index.html',
		filename: './index.html',
		inject: true,
	}),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin(),
	]
	
}
module.exports = config;