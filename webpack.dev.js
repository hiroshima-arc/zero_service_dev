/*eslint no-undef: "error"*/
/*eslint-env node*/
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill","./src/index.js"],

  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.bundle.js"
  },

  devServer: {
    contentBase: "dist",
    open: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env"
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "./contents.css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      template: "./src/signup.html",
      filename: "signup.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/verify.html",
      filename: "verify.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/signin.html",
      filename: "signin.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/forget.html",
      filename: "forget.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/service.html",
      filename: "service.html"
    }),
    new CopyPlugin([
      { from: 'src/css', to: 'css' },
      { from: 'src/img', to: 'img' },
      { from: 'src/vendor', to: 'vendor' }
    ]),
    new CleanWebpackPlugin()
  ]
};