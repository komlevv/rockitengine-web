import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { devConfig } from '../webpack.config';
import { listen, environment, host, port, DevError } from './server.common';

const app = express();

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

listen(app);
