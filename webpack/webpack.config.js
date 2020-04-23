'use strict';

const { resolve } = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts|.tsx$/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([
      {
        context: resolve(__dirname, '../client'),
        from: 'static',
      },
    ]),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../client/static/index.html'),
    }),
  ],
};
