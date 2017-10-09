/*
* @Author: Elory
* @Date:   2017-10-08 22:24:50
* @Last Modified by:   Elory
* @Last Modified time: 2017-10-08 22:27:21
*/
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(9003, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:9003/')
});