var path = require('path')

module.exports = {
  context: __dirname + '/app',
  entry: {
    javascript: './index.js',
    html: './index.html',
  },

  output: {
    filename: 'app.js',
    path: __dirname + '/dist',
  },
  devtool: '#sourcemap',

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, './app')
    },{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },{
      test: /\.html$/,
      loader: 'file?name=[name].[ext]',
    }]
  }
}
