import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { devConfig } from '../webpack.config';
import { app, listen, environment, host, port } from './server.prod';

const DevError = (msg) => ({
  name: 'DevError',
  message: `${msg}`,
});

if (environment === 'development') {
  // use webpack hot reloading
  const compiler = webpack(devConfig);
  const middleware = webpackMiddleware(compiler, {
    publicPath: `http://${host}:${port}/`,
    stats: { colors: true },
  });
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(path.join(__dirname, '../dist/')));
  app.get('/*', (req, res) => {
    res.write(
      middleware.context.outputFileSystem.readFileSync(path.join(__dirname, '../dist/index.html'))
    );
    res.end();
  });
} else {
  throw DevError(
    `Environment is not set to development, nothing to do. Current environment: ${environment}`
  );
}

listen();
