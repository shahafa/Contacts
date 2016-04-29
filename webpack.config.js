const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = [{
  name: 'client-side rendering',
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'app/main.jsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015'],
      },
    }],
  },
}, {
  name: 'server-side rendering',
  target: 'node',
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'server'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
  },
  node: {
    __dirname: true
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
}];
