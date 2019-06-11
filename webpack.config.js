const path = require("path");

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map', //using source maps

  entry: './src/panorama.js',

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "panorama.js",

    library: "panorama",
    libraryTarget: "umd",
    libraryExport: 'default', // make library is the default export directly.
  }

}