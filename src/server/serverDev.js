const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const { clientDevConfig, serverDevConfig } = require('../../webpack.config.babel');
const { host, port, environment, listen, DevError } = require('./serverCommon');

const app = express();

if (environment === 'development') {
  const compiler = webpack([clientDevConfig, serverDevConfig]);
  app.use(
    webpackMiddleware(compiler, {
      publicPath: `http://${host}:${port}/`,
      stats: { colors: true },
      serverSideRender: true,
    })
  );
  app.use(webpackHotMiddleware(compiler.compilers.find((c) => c.name === 'client')));
  app.use(webpackHotServerMiddleware(compiler));
  listen(app);
} else {
  throw DevError(
    `Node environment should be set to 'development'. Current environment: ${environment}`
  );
}
