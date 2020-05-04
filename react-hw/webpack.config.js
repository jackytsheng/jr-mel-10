//node js 提供的
const path = require('path');

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
      test: /\.(ts|js)x?$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.(sc|sa|c)ss?$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: "[path][name]__[local]"
            }
          }
        }
      ],
      include: /\.module\.css$/,
    }
    ,{
      test: /\.(sc|sa|c)ss?$/,
      use:[
        "style-loader",
        "css-loader",
      ],
      exclude:/\.module\.css$/,
    }
  ]
  },
  output: {
    path: path.resolve(__dirname, "./src/build"),
    filename: "bundle.js"
  }
}