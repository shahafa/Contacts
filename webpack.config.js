const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  name: 'server-side rendering',
  target: 'node',
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'server'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
  },
  externals: [nodeExternals()],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      query: {
        presets: ['es2015'],
      },
    }]
  }
};
