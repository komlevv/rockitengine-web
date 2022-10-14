import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import './polyfill';
import App from '../components/App/App';

export const renderHtml = (req) => {
  const html = ReactDOM.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  return `
  <html lang="en-US">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="Design &amp; Development agency">
      <script src="/bundle.js" defer></script>
      <link href="/main.css" rel="stylesheet">
      <title>RockitEngine - Design & Development</title>
    </head>
    <body>
    <div id="root">${html}</div>
    </body>
    </html>
    `;
};

const serverRender = () => (req, res, next) => {
  res.status(200).send(renderHtml(req));
  next();
};

export default serverRender;
