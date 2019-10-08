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
  },

  module:{
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /(node_modules|bower_components|\.spec\.js)/,
        use: [
          {
            loader: 'webpack-strip-block',
            options: {
              start: 'DEV-START',
              end: 'DEV-END'
            }
          }
        ]
      },
      {
        test: /\.(css|less)$/i,
        use:[
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules:{
                localIdentName: '[name]__[local]--[hash:base64:5]',// '[path][name]__[local]--[hash:base64:5]',
              }
            }
          },
          "less-loader",
        ]
      }
      ,{
        test: /\.svg$/,
        use: {
          loader: 'svg-url-loader'
        }
      }
    ]
  }
};
