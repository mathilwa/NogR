const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: [
    './app/public/index.js',
    './app/public/style/style.css',
  ],
  output: {
    path: path.resolve(__dirname, 'app/public/dist'),
    filename: './app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'es2015'],
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          loader: 'css-loader',
          options: {
            url: false,
          },
        }),
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(mov|mp4)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new WebpackBuildNotifierPlugin({ sound: false }),
    new HtmlWebpackPlugin({
      template: 'app/public/index.html',
      inject: 'body',
      filename: 'index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'app/public/img/'),
        to: 'img/',
      },
      {
        from: path.resolve(__dirname, 'app/public/video/'),
        to: 'video/',
      },
    ]),
    new ExtractTextPlugin('style/style.bundle.css', {
      allChunks: true,
    }),
  ],
};
