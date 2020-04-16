const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fileLoader = require('file-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, 'dist/'),
};

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
      filename: 'index.html',
    }),
    new CopyWebpackPlugin([{
      from: `${PATHS.src}/assets/img`,
      to: 'img',
    },
    {
      from: `${PATHS.src}/assets/audio`,
      to: 'audio',
    },
    ]),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
  ],
};
