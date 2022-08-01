const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env'],
                                ['@babel/preset-react', {"runtime": "automatic"}]
                            ]
                        }
                    }
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                        }
                    },
                    {loader: 'postcss-loader'}
                ]
            },
            {
                test: /\.(ico|jpg|jpeg|png|svg|gif|webm|mp4)(\?.*)?$/,
                use: [
                    {loader: 'file-loader', options: {name: '[name].[ext]'}}
                ]
            },
            {
                test: /\.html?$/,
                use: [
                    {loader: 'file-loader', options: {name: '[name].[ext]'}}
                ]
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    plugins: [],
    devServer: {
        static: path.resolve(__dirname, './dist'),
        hot: true,
    },
    watch: true,
    watchOptions: {
        poll: 1000
    }
};
