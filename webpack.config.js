const Path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CheckerPlugin } = require('awesome-typescript-loader');

const ROOT = Path.resolve( __dirname, '' );
const SRC = ROOT + '/src';
const DESTINATION = ROOT + '/dist';

module.exports = (env, argv) => {
  const mode = argv.mode || 'development';
  const needSourceMap = mode === 'development' ? true : false;

  return {
    mode: mode,
    devtool: 'source-map',
    entry: SRC + '/app.ts',
    output: {
      path: DESTINATION,
      publicPath: '/dist/',
      filename: 'app.bundle.min.js'
    },
    module: {
      rules: [
        {
          test: /\.(sc|sa|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: needSourceMap,
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: needSourceMap,
              }
            },
          ],
          exclude: /node_modules/
        },
        {
          enforce: 'pre',
          test: /\.ts$/,
          use: 'tslint-loader',
          exclude: /node_modules/
        },
        {
          test: /\.ts$/,
          use: 'awesome-typescript-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
      modules: [
        SRC,
        'node_modules'
      ]
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: ROOT + '/index.html',
          to: DESTINATION
        }
      ]),
      new MiniCssExtractPlugin({
        filename: "app.bundle.min.css",
      }),
      new CheckerPlugin()
    ],
    optimization: {
      minimize: mode === 'development' ? false : true,
      minimizer: [
        new UglifyJsPlugin({
          include: /\.min\.js$/,
          sourceMap: needSourceMap
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: mode === 'development' ? { map: { inline: true } } : { map: false, safe: true, discardComments: { removeAll: true } }
        })
      ],
    },
    devServer: {
      port: 8080,
      overlay: false,
      lazy: false
    }
  }
};