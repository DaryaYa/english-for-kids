const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist',
  },
  devServer: {
    overlay: true,
  },
  module: {
    rules: [     
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader',
        MiniCssExtractPlugin.loader,
        {loader: 'css-loader',
          options : { sourceMap: true,
          modules: true },
        },
        {loader: 'sass-loader',
        options: { sourceMap: true,
       },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};
