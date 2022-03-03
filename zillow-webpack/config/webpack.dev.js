const helpers = require('./helpers');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

module.exports = function (options) {
  return webpackMerge(commonConfig(), {
    mode:'development',

    output: {
      sourceMapFilename: '[name].[chunkhash].bundle.map',
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    devServer: {
      port: 3000,
      host: "localhost",
      historyApiFallback: true,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      }
    }
  });
}
