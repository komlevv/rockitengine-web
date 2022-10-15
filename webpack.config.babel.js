require('@babel/register');
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';
const PATH_DIST = path.resolve(__dirname, './dist');
const PATH_ENTRY_CLIENT = path.resolve(__dirname, './src/client.js');
const PATH_ENTRY_SERVER = path.resolve(__dirname, './src/server/serverProd.js');
const PATH_ENTRY_SERVER_RENDER = path.resolve(__dirname, './src/server/serverRender.js');
const NAME_OUTPUT_CLIENT = 'bundle.js';
const NAME_OUTPUT_SERVER = 'server.js';
const DEVTOOL = 'inline-cheap-source-map';

const common = {
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
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
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: 'style-loader', options: { injectType: 'singletonStyleTag' } },
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
              /* eslint-disable global-require */
              implementation: require('sass'),
              /* eslint-enable global-require */
            },
          },
        ],
      },
      {
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
      },
      {
        test: /\.(eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
        // https://stackoverflow.com/questions/68634225/
        type: 'asset/resource',
        generator: {
          filename: './fonts/[name][ext]',
        },
      },
      {
        test: /\.(html|ico)$/,
        use: [{ loader: 'file-loader', options: { name: '[name].[ext]' } }],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};

const clientProdConfig = {
  ...common,
  mode: PRODUCTION,
  entry: PATH_ENTRY_CLIENT,
  output: { path: PATH_DIST, filename: NAME_OUTPUT_CLIENT },
  module: {
    rules: [
      common.module.rules[0],
      {
        ...common.module.rules[1],
        use: [
          MiniCssExtractPlugin.loader,
          common.module.rules[1].use[1],
          common.module.rules[1].use[2],
          common.module.rules[1].use[3],
        ],
      },
      common.module.rules[2],
      common.module.rules[3],
      common.module.rules[4],
    ],
  },
};

const serverProdConfig = {
  ...common,
  mode: PRODUCTION,
  entry: PATH_ENTRY_SERVER,
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: PATH_DIST,
    filename: NAME_OUTPUT_SERVER,
  },
  module: {
    rules: [
      // js
      common.module.rules[0],
      // scss
      {
        ...common.module.rules[1],
        use: [
          MiniCssExtractPlugin.loader,
          common.module.rules[1].use[1],
          common.module.rules[1].use[2],
          common.module.rules[1].use[3],
        ],
      },
      // jpg|jpeg|png|svg|gif|webm|mp4
      {
        ...common.module.rules[2],
        use: [
          {
            loader: common.module.rules[2].use[0].loader,
            options: {
              ...common.module.rules[2].use[0].options,
              emitFile: false,
            },
          },
        ],
      },
      {
        // eot|otf|webp|ttf|woff|woff2
        ...common.module.rules[3],
        generator: {
          emit: false,
          filename: common.module.rules[3].generator.filename,
        },
      },
      // html|ico
      common.module.rules[4],
    ],
  },
};

const clientDevConfig = {
  ...common,
  mode: DEVELOPMENT,
  name: 'client',
  entry: ['webpack-hot-middleware/client?reload=true', PATH_ENTRY_CLIENT],
  output: { path: PATH_DIST, filename: NAME_OUTPUT_CLIENT },
  plugins: [...common.plugins, new webpack.HotModuleReplacementPlugin()],
  devtool: DEVTOOL,
  watch: true,
  watchOptions: { poll: 1000 },
};

const serverDevConfig = {
  ...serverProdConfig,
  mode: DEVELOPMENT,
  name: 'server',
  entry: PATH_ENTRY_SERVER_RENDER,
  output: { path: PATH_DIST, filename: NAME_OUTPUT_SERVER, libraryTarget: 'commonjs2' },
  devtool: DEVTOOL,
  watch: true,
  watchOptions: { poll: 1000 },
};

module.exports.clientDevConfig = clientDevConfig;
module.exports.clientProdConfig = clientProdConfig;
module.exports.serverDevConfig = serverDevConfig;
module.exports.serverProdConfig = serverProdConfig;
