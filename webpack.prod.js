const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge.merge(common, {
  mode:'production',
  plugins: [new UglifyJSPlugin()],
  optimization:{
    splitChunks:{
        chunks:'all',
        name:'Home'
    },
  }
});
