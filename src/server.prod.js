import express from 'express';
import path from 'path';

const environment = process.env.NODE_ENV;
const host = '0.0.0.0'; // listen on all interfaces
const port = 8080;
const app = express();

const listen = () => {
  app.listen(port, host, (err) =>
    err ? console.log(err) : console.log(`Listening on http://${host}:${port}/`)
  );
};

// hide function calls from being called in dev server
if (environment === 'production') {
  app.use(express.static(__dirname));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
  listen();
}

export { listen, environment, host, port, app };
