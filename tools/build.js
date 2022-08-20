import webpack from 'webpack';
import { transformFileAsync } from '@babel/core';
import path from 'path';
import { promises as fs } from 'fs';
import { prodConfig } from '../webpack.config';

const srcDir = path.join(__dirname, '..', 'src');
const distDir = path.join(__dirname, '..', 'dist');

const log = (msg) => {
  // https://telepathy.freedesktop.org/doc/telepathy-glib/telepathy-glib-debug-ansi.html
  const GREEN = '\x1b[32m';
  const GREEN_OFF = '\x1b[0m';
  const BOLD = '\x1b[1m';
  const BOLD_OFF = '\x1b[22m';
  const color = `${GREEN}${BOLD}%s${BOLD_OFF}${GREEN_OFF}`;
  console.log(color, `[build]: ${msg}`);
};

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
  log('Wipe dist dir..');
  let files = await fs.readdir(distDir);
  files = files.filter((f) => f !== '.gitkeep');
  await Promise.all(
    files.map(async (file) => {
      const fullPath = path.join(distDir, file);
      const fStat = await fs.stat(fullPath);
      if (fStat.isDirectory()) {
        await fs.rm(fullPath, { recursive: true, force: true });
        console.log(`removed dir: ${fullPath}`);
      } else {
        await fs.unlink(fullPath);
        console.log(`removed file: ${fullPath}`);
      }
    })
  );

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
      .copyFile(path.join(__dirname, '../package.json'), path.join(distDir, 'package.json'))
      .then(() => console.log('written package.json')),
  ]);
  log('Done building');
})();
