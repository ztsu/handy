var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "#inline-source-map",
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "./src/index.js"
  ],
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "handy.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({__DEV__: process.env.NODE_ENV === "production" ? "false" : "true"})
  ],
  module: {
    loaders: [
      {test: /\.jsx?$/, include: path.join(__dirname, "src/"), loaders: ["react-hot", "babel-loader"]},
      {test: /\.css$/, loader: "style!css"}
    ]
  }
};
