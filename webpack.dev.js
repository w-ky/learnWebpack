const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
function resolve(route) {
  return path.resolve(__dirname, route);
}
module.exports = merge.merge(common, {
  mode: "development",
  devtool: "inline-source-map", //映射源码错误
  devServer: {
    contentBase: resolve("dist"),
    port: 3000,
    host: "0.0.0.0",
    hot: true,
    publicPath: "/",
  },
});
