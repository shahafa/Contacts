const express = require('express');
const path = require('path');

function expressConfig(app) {
  // Sets the app port
  app.set('port', (process.env.PORT || 3000));

  // Refers to the root directory from which the static assets are to be served
  app.use(express.static(path.join(__dirname, '../..', 'build')));

  // Indicates the app is behind a front-facing proxy,
  // and to use the X-Forwarded-* headers to determine the connection and the
  // IP address of the client.
  app.set('trust proxy', 'loopback');

  // X-Powered-By header has no functional value.
  // Keeping it makes it easier for an attacker to build the site's profile
  // It can be removed safely
  app.disable('x-powered-by');
}

module.exports = expressConfig;
