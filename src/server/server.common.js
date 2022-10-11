export const environment = process.env.NODE_ENV;
export const host = '0.0.0.0'; // listen on all interfaces
export const port = 8080;

export const listen = (appInstance) => {
  appInstance.listen(port, host, (err) =>
    err ? console.log(err) : console.log(`Listening on http://${host}:${port}/`)
  );
};

export const DevError = (msg) => ({
  name: 'DevError',
  message: `${msg}`,
});
