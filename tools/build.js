import path from 'path';
import { promises as fs } from 'fs';
import { clientProdConfig, serverProdConfig } from '../webpack.config.babel';
import packageJson from '../package.json';
import { clean, distDir, log, bundle } from './common';

(async () => {
  await clean();
  await bundle(serverProdConfig);
  await bundle(clientProdConfig);
  log('Write package.json..');
  await fs
    .writeFile(
      path.join(distDir, 'package.json'),
      JSON.stringify({
        version: `${packageJson.version}-build-${Date.now()}`,
        dependencies: { ...packageJson.dependencies },
      })
    )
    .then(() => log('Written package.json'));
  log('Done building');
})();
