const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

function resolve(route) {
  return path.resolve(__dirname, route);
}
module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve("dist"),
    filename: "[name].[hash].js",
    hashDigestLength: 10,
    pathinfo: true,
    chunkFilename: "[name].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js|jsx$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[contenthash].[ext]",
              outputPath:'images/'
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "@src": resolve("src"),
    },
    extensions: [".js", ".css", ".less", ".jsx", ".txt", ".json"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/static/index.html",
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
