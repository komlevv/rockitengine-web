require('@babel/register');
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ENV = process.env.NODE_ENV;
const PRODUCTION = ENV === 'production';

if (ENV !== 'development' && ENV !== 'production')
  throw new Error(`NODE_ENV is incorrect or not set. Current value:${ENV}`);

const PATH_DIST = path.resolve(__dirname, './dist');
const PATH_ENTRY_CLIENT = path.resolve(__dirname, './src/client.js');
const PATH_ENTRY_SERVER = path.resolve(__dirname, './src/server/serverProd.js');
const PATH_ENTRY_SERVER_RENDER = path.resolve(__dirname, './src/server/serverRender.js');
const NAME_OUTPUT_CLIENT = 'bundle.js';
const NAME_OUTPUT_SERVER = 'server.js';
const DEVTOOL = PRODUCTION ? false : 'inline-cheap-source-map';

const loadJS = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env'], ['@babel/preset-react', { runtime: 'automatic' }]],
      },
    },
  ],
};

const loadMedia = {
  test: /\.(jpg|jpeg|png|svg|gif|webm|mp4)(\?.*)?$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'media',
        // todo investigate
        // svg files load as absolute links when publicPath is not set
        publicPath: '/media/',
      },
    },
  ],
};

const loadFonts = {
  test: /\.(eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
  // https://stackoverflow.com/questions/68634225/
  type: 'asset/resource',
  generator: {
    filename: './fonts/[name][ext]',
  },
};

const loadHtml = {
  test: /\.(html|ico)$/,
  use: [{ loader: 'file-loader', options: { name: '[name].[ext]' } }],
};
const loadStyle = {
  test: /\.s[ac]ss$/i,
  use: [
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        modules: true,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            [
              'autoprefixer',
              {
                // Options
              },
            ],
          ],
        },
      },
    },
    {
      loader: 'sass-loader',
      options: {
        // eslint-disable-next-line global-require
        implementation: require('sass'),
      },
    },
  ],
};

const common = {
  mode: ENV,
  devtool: DEVTOOL,
  watch: !PRODUCTION,
  watchOptions: { poll: 1000 },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  module: {
    rules: [loadJS, loadStyle, loadMedia, loadFonts, loadHtml],
  },
  plugins: [new MiniCssExtractPlugin()],
};

const clientConfig = {
  ...common,
  name: 'client',
  entry: PRODUCTION
    ? PATH_ENTRY_CLIENT
    : ['webpack-hot-middleware/client?reload=true', PATH_ENTRY_CLIENT],
  output: { path: PATH_DIST, filename: NAME_OUTPUT_CLIENT },
  plugins: PRODUCTION
    ? common.plugins
    : [...common.plugins, new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      loadJS,
      {
        ...loadStyle,
        use: [
          ...(PRODUCTION
            ? [{ loader: MiniCssExtractPlugin.loader, options: {} }]
            : [{ loader: 'style-loader', options: { injectType: 'singletonStyleTag' } }]),
          loadStyle.use[0],
          loadStyle.use[1],
          loadStyle.use[2],
        ],
      },
      loadMedia,
      loadFonts,
      loadHtml,
    ],
  },
};

const serverConfig = {
  ...common,
  name: 'server',
  entry: PRODUCTION ? PATH_ENTRY_SERVER : PATH_ENTRY_SERVER_RENDER,
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: PATH_DIST,
    filename: NAME_OUTPUT_SERVER,
    ...(!PRODUCTION && { libraryTarget: 'commonjs2' }),
  },
  module: {
    rules: [
      {
        ...loadJS,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env'], ['@babel/preset-react', { runtime: 'automatic' }]],
              plugins: ['@babel/transform-modules-commonjs'],
            },
          },
        ],
      },
      {
        ...loadStyle,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: { emit: false },
          },
          loadStyle.use[0],
          loadStyle.use[1],
          loadStyle.use[2],
        ],
      },
      {
        ...loadMedia,
        use: [
          {
            loader: loadMedia.use[0].loader,
            options: {
              ...loadMedia.use[0].options,
              emitFile: false,
            },
          },
        ],
      },
      {
        ...loadFonts,
        generator: {
          emit: false,
          filename: loadFonts.generator.filename,
        },
      },
      loadHtml,
    ],
  },
};

module.exports.clientConfig = clientConfig;
module.exports.serverConfig = serverConfig;
