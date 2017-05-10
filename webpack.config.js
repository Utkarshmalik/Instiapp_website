var path = require('path');

var MODULE_BUILD_DIR = path.resolve(__dirname, 'public');
var MODULE_APP_DIR = path.resolve(__dirname, 'src');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    port: 8025
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
  { loader: "css-loader" },

],
      },
      {
    test: /\.(gif|png|jpe?g|svg)$/i,
    loaders: [
      'file-loader',
      {
        loader: 'image-webpack-loader',
        query: {
          progressive: true,
          optimizationLevel: 7,
          interlaced: false,
          pngquant: {
            quality: '65-90',
            speed: 4
          }
        }
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
