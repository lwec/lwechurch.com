const path = require('path');
const cors = require('@koa/cors');
const webpack = require('webpack');

module.exports = {
  devServer: {
    publicPath: 'http://localhost:8080/',
  },
  devtool: 'eval',
  serve: {
    add(app) {
      app.use(
        cors({
          origin: '*',
          exposeHeaders: 'Service-Worker-Allowed',
        }),
      );
    },
  },

  entry: './static_src/index',

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
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
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
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|ttf|otf|woff2|eot)$/,
        use: [
          {
            loader: 'url-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              stripdeclarations: true,
              iesafe: true,
            },
          },
        ],
      },
    ],
  },

  output: {
    filename: 'lwechurch.js',
    path: path.resolve(__dirname, 'static'),
    publicPath: 'http://localhost:8080/',
  },

  plugins: [new webpack.NamedModulesPlugin()],

  mode: 'production',
};
