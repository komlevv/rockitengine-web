const express = require('express');
const { environment, listen, DevError } = require('./serverCommon');
const { renderHtml } = require('./serverRender');

const app = express();

if (environment === 'production') {
  app.use(express.static(__dirname));
  app.get('/*', (req, res) => {
    res.send(renderHtml(req));
  });
  listen(app);
} else {
  throw DevError(`Environment should be set to 'production'. Current environment: ${environment}`);
}
