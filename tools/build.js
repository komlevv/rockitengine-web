import webpack from 'webpack';
import { transformFileAsync } from '@babel/core';
import path from 'path';
import { promises as fs } from 'fs';
import { prodConfig } from '../webpack.config';
import packageJson from '../package.json';
import { srcDir, distDir, log } from './common';
import clean from './clean';

const bundle = () =>
  new Promise((resolve, reject) => {
    log('Build client bundle..');
    const compiler = webpack(prodConfig);
    compiler.run((err, stats) => {
      if (err) {
        reject(err);
        return;
      }
      console.log(stats.toString({ colors: true }));
      compiler.close((closeErr) => (closeErr ? reject(closeErr) : null));
      resolve();
    });
  });

(async () => {
  await clean();

  await bundle();

  log('Write files..');
  const babelOpts = {
    root: path.resolve(__dirname, '..'),
    filename: 'server.prod.js',
    minified: true,
    comments: false,
    presets: ['@babel/preset-env'],
  };
  const compiled = await transformFileAsync(path.join(srcDir, 'server.prod.js'), babelOpts);
  console.log('compiled server.js');

  await Promise.all([
    fs
      .writeFile(path.join(distDir, 'server.js'), compiled.code)
      .then(() => console.log('written server.js')),
    fs
      .writeFile(
        path.join(distDir, 'package.json'),
        JSON.stringify({
          version: `${packageJson.version}-build-${Date.now()}`,
          dependencies: { ...packageJson.dependencies },
        })
      )
      .then(() => console.log('written package.json')),
  ]);
  log('Done building');
})();
