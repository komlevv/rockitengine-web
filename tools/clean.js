import { promises as fs } from 'fs';
import path from 'path';
import { distDir, log } from './common';

const clean = async () => {
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
};

clean().then(() => log('Done wiping'));

export default clean;
