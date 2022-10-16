// const path = require('path');
// const { createFsFromVolume, Volume } = require('memfs');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const { clientConfig, serverConfig } = require('../../webpack.config.babel');
const { listen } = require('./serverCommon');

const requireUncached = (module) => {
  delete require.cache[require.resolve(module)];
  // eslint-disable-next-line global-require,import/no-dynamic-require
  return require(module);
};

const app = express();

const compiler = webpack([clientConfig, serverConfig]);
// const fs = createFsFromVolume(new Volume());
// fs.join = path.join.bind(path);

const devMiddleWare = webpackDevMiddleware(compiler, {
  stats: { colors: true },
  serverSideRender: true,
  writeToDisk: true,
  // outputFileSystem: fs,
});
app.use(devMiddleWare);
app.use(webpackHotMiddleware(compiler.compilers.find((c) => c.name === 'client')));

app.get('/*', (req, res) => {
  // // // WIP
  // https://stackoverflow.com/questions/38779924 https://github.com/streamich/memfs/issues/323
  // attempt to require 'render' from memory, but this doesn't resolve node_modules
  // const Module = module.constructor;
  // const m = new Module();
  // const serverModule = fs.readFileSync(path.join(compiler.outputPath, 'server.js'), 'utf8');
  // m._compile(serverModule, 'server.js');
  // const render = requireUncached(serverModule);
  // // //
  const render = requireUncached('../../dist/server.js');
  render(req, res);
});

listen(app);
