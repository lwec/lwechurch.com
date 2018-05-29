const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        options: {
          presets: ['env'],
        },
      },
      {
        test: /\.(scss|css)$/,

        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',

            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',

            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new UglifyJsPlugin(),
    new MiniCssExtractPlugin({ filename: 'lwechurch.[chunkhash].css' }),
  ],

  entry: './static_src/index',

  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'static'),
  },

  mode: 'production',
};
