const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "src"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      template: "./src/about/index.html",
      filename: "about/index.html",
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      template: "./src/listing/index.html",
      filename: "listing/index.html",
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      template: "./src/listings/index.html",
      filename: "listings/index.html",
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      template: "./src/profile/index.html",
      filename: "profile/index.html",
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      template: "./src/register/index.html",
      filename: "register/index.html",
      inject: "body",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    compress: true,
    port: 8080,
    open: true,
  },
};
