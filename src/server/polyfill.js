// tweak node to play nice with SSR

// example: ignore these extensions when parsing .js files in node
// const noop = () => null;
// require.extensions['.svg'] = noop;
// require.extensions['.mp4'] = noop;
// require.extensions['.jpg'] = noop;
// require.extensions['.png'] = noop;
// require.extensions['.scss'] = noop;

// polyfill crypto in node
global.crypto = require('crypto').webcrypto;
