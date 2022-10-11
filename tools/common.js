import path from 'path';
import { promises as fs } from 'fs';
import webpack from 'webpack';

// export const srcDir = path.join(__dirname, '..', 'src');
export const distDir = path.join(__dirname, '..', 'dist');

export const log = (msg) => {
  // https://telepathy.freedesktop.org/doc/telepathy-glib/telepathy-glib-debug-ansi.html
  const GREEN = '\x1b[32m';
  const GREEN_OFF = '\x1b[0m';
  const BOLD = '\x1b[1m';
  const BOLD_OFF = '\x1b[22m';
  const color = `${GREEN}${BOLD}%s${BOLD_OFF}${GREEN_OFF}`;
  console.log(color, `[build]: ${msg}`);
};

export const clean = async () => {
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
  ).then(() => log('Done wiping'));
};

export const bundle = (config) =>
  new Promise((resolve, reject) => {
    log(`Build ${config.entry} bundle..`);
    const compiler = webpack(config);
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
