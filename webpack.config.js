/* eslint-disable global-require */
const path = require('path');
const webpack = require('webpack');

const common = {
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
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
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.(ico|jpg|jpeg|png|svg|gif|webm|mp4)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'media',
            },
          },
        ],
      },
      {
        test: /\.(eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
        // https://stackoverflow.com/questions/68634225/
        type: 'asset/resource',
        generator: {
          filename: './fonts/[contenthash][ext]',
        },
      },
      {
        test: /\.html?$/,
        use: [{ loader: 'file-loader', options: { name: '[name].[ext]' } }],
      },
    ],
  },
};

export const devConfig = {
  ...common,
  mode: 'development',
  entry: ['webpack-hot-middleware/client?reload=true', path.resolve(__dirname, './src/index.js')],
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: 'inline-cheap-source-map',
  watch: true,
  watchOptions: {
    poll: 1000,
  },
};

export const prodConfig = {
  ...common,
  mode: 'production',
  entry: path.resolve(__dirname, './src/index.js'),
};

export default devConfig;
