import express from 'express';
import path from 'path';
import { listen, environment, host, port, DevError } from './server.common';

const app = express();

if (environment === 'production') {
  app.use(express.static(__dirname));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
  listen();
} else {
  throw DevError(`Environment should be set to 'production'. Current environment: ${environment}`);
}

export { listen, environment, host, port, app };
