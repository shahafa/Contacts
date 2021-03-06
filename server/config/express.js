const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./../../webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

function expressConfig(app) {
  // Sets the app port
  app.set('port', (process.env.PORT || 3000));

  // Refers to the root directory from which the static assets are to be served
  let staticPath = path.join(__dirname, '../..', 'dist/');
  if (process.env.NODE_ENV === 'development') {
    staticPath = path.join(__dirname, '../..', 'app/');
  }
  app.use(express.static(staticPath));

  // Indicates the app is behind a front-facing proxy,
  // and to use the X-Forwarded-* headers to determine the connection and the
  // IP address of the client.
  app.set('trust proxy', 'loopback');

  // X-Powered-By header has no functional value.
  // Keeping it makes it easier for an attacker to build the site's profile
  // It can be removed safely
  app.disable('x-powered-by');

  // Sets webpack hot reloading in devlopment mode
  if (process.env.NODE_ENV === 'development') {
    const compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    }));

    app.use(webpackHotMiddleware(compiler));
  }
}

module.exports = expressConfig;
