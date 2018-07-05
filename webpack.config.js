const path = require('path');

module.exports = {
  entry: {
    app: "./app/assets/js/app.js",
    vendor: "./app/assets/js/vendor.js"
  },
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "[name].js"
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      },
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
}
