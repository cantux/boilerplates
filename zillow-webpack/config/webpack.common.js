const webpack = require('webpack');
const helpers = require('./helpers');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function (options) {
  return {
    entry: {
      'main': './src/index.js'
    },
    output: {
      path: helpers.root('dist'),
      filename: '[name].[chunkhash].bundle.js',
      chunkFilename: '[id].[chunkhash].chunk.js'
    },
    resolve: {
      extensions: [".js", ".json", ".jsx"],
      modules: [helpers.root('src'), helpers.root('node_modules')],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          query: {
            presets: ["es2015", "react"]
          }
        },
        /*
         * Json loader support for *.json files.
         *
         * See: https://github.com/webpack/json-loader
         */
        {
          test: /\.json$/,
          use: 'json-loader'
        },
        /* File loader for supporting images, for example, in CSS files.
         */
        {
          test: /\.(jpeg|jpg|png|gif)$/,
          use: 'file-loader'
        },
        /* File loader for supporting images, for example, in CSS files. */
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 512
              }
            }
          ]
        },
        /**
         * Sass loader
         */
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
      ]
    },

    plugins: [
      new CleanWebpackPlugin([helpers.root('dist')],{root: helpers.root()}),
      /*
      * Plugin: CopyWebpackPlugin
      * Description: Copy files and directories in webpack.
      *
      * Copies project static assets.
      *
      * See: https://www.npmjs.com/package/copy-webpack-plugin
      */
      // new CopyWebpackPlugin([
      //   { from: 'src/assets', to: 'assets',  }
      // ]),
      /*
       * Plugin: HtmlWebpackPlugin
       * Description: Simplifies creation of HTML files to serve your webpack bundles.
       * This is especially useful for webpack bundles that include a hash in the filename
       * which changes every compilation.
       *
       * See: https://github.com/ampedandwired/html-webpack-plugin
       */
      new HtmlWebpackPlugin({
        template: helpers.root('public/index.html'),
        chunksSortMode: 'dependency',
        metadata: {
          baseUrl: '/',
          isDevServer: helpers.isWebpackDevServer()
        },
        inject: 'body' // React needs to be loaded after the root element is created.
      })
    ]
  }
};
