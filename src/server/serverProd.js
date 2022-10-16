const express = require('express');
const { listen } = require('./serverCommon');
const render = require('./serverRender');

const app = express();

app.use(express.static(__dirname));
app.get('/*', (req, res) => {
  render(req, res);
  // res.send(renderHtml(req));
});
listen(app);
