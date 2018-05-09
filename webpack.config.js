const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    "user-profile-react": path.join(
      __dirname,
      "/views/user-profile-react/index.js"
    ),
    "user-profile-react-ssr": path.join(
      __dirname,
      "/views/user-profile-react-ssr/index.js"
    ),
  },
  output: {
    path: path.join(__dirname, "/public/js"),
    filename: "[name].js", // [name] is the key of the entry point up above
    chunkFilename: "[name].[chunkhash:8].chunk.js",
    publicPath: "/js",
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"],
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
    ],
  },
  plugins: [
    // Moment.js is an extremely popular library that bundles large locale files
    // by default due to how Webpack interprets its code. This is a practical
    // solution that requires the user to opt into importing specific locales.
    // https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
    // You can remove this if you don't use Moment.js:
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
};
