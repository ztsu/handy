var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    "./src/index.js"
  ],
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "handy.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({__DEV__: process.env.NODE_ENV === "production" ? "false" : "true"}),
    new HtmlWebpackPlugin({__BUILD__: process.env.TRAVIS_BUILD_NUMBER, template: "index.html"})
  ],
  module: {
    loaders: [
      {test: /\.jsx?$/, include: path.join(__dirname, "src/"), loaders: ["babel-loader"]},
      {test: /\.css$/, loader: "style!css"}
    ]
  }
};
