var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: ['babel-polyfill', path.join('src/client/app.js')],
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exlude: /node_modules/,
        use : {
          loader: 'babel-loader'
        }
      }
    ]
  }
}