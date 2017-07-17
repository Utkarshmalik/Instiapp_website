const path = require('path');
const MODULE_BUILD_DIR = path.resolve(__dirname, 'public');
const MODULE_APP_DIR = path.resolve(__dirname, 'src');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const smartImport = require("postcss-smart-import");
const ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
const config = {
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    port: 8025,
    host: '0.0.0.0'
  },
  entry: MODULE_APP_DIR + '/index.js',
  output: {
    path: MODULE_BUILD_DIR,
    publicPath: '/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              useable: true
            },
          },
          {
            loader: "css-loader",
            options: {
              minimize: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('postcss-import')({ root: loader.resourcePath }),
                require('autoprefixer')(),
                require('cssnano')()
              ]
            }
          }
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
               progressive: true,
              },
              gifsicle: {
               interlaced: false,
              },
              optipng: {
               optimizationLevel: 4,
              },
              pngquant: {
               quality: '75-90',
               speed: 3,
              },
            },
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("main.css"),

  ]
};
module.exports = config;
