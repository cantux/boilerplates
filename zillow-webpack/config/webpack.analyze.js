const helpers = require('./helpers');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const devConfig = require('./webpack.dev.js'); // the settings that are common to prod and dev

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function (options) {
  return webpackMerge(devConfig(), {
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  });
}
