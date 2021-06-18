const path = require("path");

module.exports = {
  entry: "/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  resolve: {
    extensions: [".ts", ".js"],
  },

  mode: "production",

  module: {
    rules: [{ test: /\.tsx?/, use: "ts-loader", exclude: /node_modules/ }],
  },
 
};