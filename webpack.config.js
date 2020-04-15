const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const fileLoader = require('file-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, 'dist/'),
  assets: path.join(__dirname, './assets'),
};

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: '/dist',
    publicPath: '/dist',
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 8081,
    overlay: true,
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp3)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: 'index.html',
      filename: 'dist/index.html',
    }),
    // new copyWebpackPlugin([{
    //   from: `${PATHS.assets}/img`,
    //   to: '/dist/img',
    //   from: `${PATHS.assets}/audio`,
    //   to: '/dist/audio',
    // }]),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
  ],
};
