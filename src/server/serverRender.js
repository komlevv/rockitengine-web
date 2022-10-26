import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import './polyfill';
import App from '../components/App/App';
import { URL_FONTS } from '../components/App/ROUTES';

const Html = ({ children }) => (
  <html lang="en-US">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Design &amp; Development agency" />
      <link href={`${URL_FONTS}/bnl-black.otf`} rel="preload" as="font" crossOrigin="" />
      <link href={`${URL_FONTS}/bnl-bold.otf`} rel="preload" as="font" crossOrigin="" />
      <link href={`${URL_FONTS}/bnl-book.otf`} rel="preload" as="font" crossOrigin="" />
      <link href={`${URL_FONTS}/bnl-light.otf`} rel="preload" as="font" crossOrigin="" />
      <link href={`${URL_FONTS}/bnl-medium.otf`} rel="preload" as="font" crossOrigin="" />
      <script src="/bundle.js" defer />
      <link href="/main.css" rel="stylesheet" />
      <title>RockitEngine - Design & Development</title>
    </head>
    <body>
      <div id="root">{children}</div>
    </body>
  </html>
);

module.exports = function render(req, res) {
  res.socket.on('error', (error) => {
    console.error('Fatal', error);
  });
  let didError = false;
  const stream = renderToPipeableStream(
    <Html>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </Html>,
    {
      onShellReady() {
        res.statusCode = didError ? 500 : 200;
        res.setHeader('Content-type', 'text/html');
        stream.pipe(res);
      },
      onError(x) {
        didError = true;
        console.error(x);
      },
    }
  );
};
