const environment = process.env.NODE_ENV;
const host = '0.0.0.0'; // listen on all interfaces
const port = 8080;

const listen = (appInstance) => {
  appInstance.listen(port, host, (err) =>
    err ? console.log(err) : console.log(`Listening on http://${host}:${port}/`)
  );
};

const DevError = (msg) => ({
  name: 'DevError',
  message: `${msg}`,
});

module.exports = { environment, host, port, listen, DevError };
