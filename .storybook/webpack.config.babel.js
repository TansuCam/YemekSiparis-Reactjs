import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import merge from 'merge'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { List } from 'immutable'
import WebpackAssetsManifest from 'webpack-assets-manifest'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import { getStyleLoader } from './src/utils/webpack'
import pkg from '../package.json'

const ENV = process.env.NODE_ENV

const PATHS = {
    root: path.resolve(__dirname),
    src: path.resolve(__dirname, './src'),
    build: path.resolve(__dirname, './build'),
    modules: path.resolve(__dirname, './node_modules'),
    test: path.resolve(__dirname, './test'),
}

const svgoConfig = JSON.stringify({
    plugins: [
        { removeTitle: true },
        { convertColors: { shorthex: false } },
        { convertPathData: false },
    ],
})

export function getCommonLoaders() {
    return List([
        getStyleLoader(ENV, 'browser', {
            test: /\.pcss$/,
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 2,
                        localIdentName: '[name]__[local]__[hash:base64:5]',
                    },
                },
                {
                    loader: 'postcss-loader',
                },
            ],
        }),
        getStyleLoader(ENV, 'browser', {
            test: /\.css$/,
            include: [PATHS.modules, PATHS.src],
            use: [
                {
                    loader: 'css-loader',
                    options: { modules: false, importLoaders: 2 },
                },
            ],
        }),
        {
            test: /\.(png|jpg|gif|ico|svg|mp3)$/,
            include: [PATHS.src],
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name]-[hash].[ext]',
                    },
                },
                {
                    loader: 'img-loader',
                    options: {
                        minimize: true,
                        optimizationLevel: 5,
                        progressive: true,
                    },
                },
            ],
        },
        {
            test: /font.*\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            include: [PATHS.src, PATHS.modules],
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: '[path][name]-[hash].[ext]',
                    },
                },
            ],
        },
        {
            test: /\.(woff|woff2)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: '[path][name]-[hash].[ext]',
                    },
                },
            ],
            include: [PATHS.src],
        },
        {
            test: /\.svg$/,
            use: [
                {
                    loader: 'svgo-loader',
                    options: svgoConfig,
                },
            ],
            include: [PATHS.src],
        },
    ])
}

const common = {
    context: path.join(__dirname, 'src'),
    module: {
        loaders: getCommonLoaders()
            .concat({
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
                include: [
                    PATHS.src,
                    PATHS.modules + '/cbor',
                    PATHS.modules + '/autobahn',
                ],
            })
            .toJS(),
    },
    resolve: {
        modules: [PATHS.src, 'node_modules'],
        extensions: ['.js', '.jsx'],
    },
}

const plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin('styles.[contenthash].css'),
    new webpack.DefinePlugin({
        __DEVELOPMENT__: process.env.NODE_ENV === 'development',
        __DEVTOOLS__: false,
        'process.env.NODE_ENV': JSON.stringify(
            process.env.NODE_ENV || 'development'
        ),
    }),
    new CopyWebpackPlugin([
        { from: 'assets/web/*.*', flatten: true },
        { context: 'assets', from: '**/*', to: '' },
    ]),
    new HtmlWebpackPlugin({
        title: 'Tieto Intelligent Building',
        template: 'assets/index.html',
        favicon: 'assets/favicon.ico',
        inject: 'body',
        chunksSortMode: 'dependency',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.[chunkhash].js',
        minChunks: Infinity,
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'meta',
        chunks: ['vendor'],
        filename: 'meta.[hash].js',
    }),
]

const envs = {
    test: {
        devtool: '#inline-source-map',
    },

    development: {
        devtool: '#eval-source-map',
        entry: {
            client: [
                // 'react-hot-loader/patch',
                // 'webpack-hot-middleware/client',
                './client.js',
            ],
            vendor: [
                'babel-polyfill', // de-comment if polyfill is needed
            ].concat(Object.keys(pkg.dependencies)),
        },
        output: {
            path: PATHS.build,
            publicPath: '/',
            filename: '[name].[chunkhash].js',
        },
        plugins: plugins.concat([new webpack.HotModuleReplacementPlugin()]),
    },
    production: {
        devtool: 'source-map',
        entry: {
            client: ['./client.js'],
            vendor: ['babel-polyfill'].concat(Object.keys(pkg.dependencies)),
        },
        output: {
            path: PATHS.build,
            publicPath: '/',
            filename: '[name].[chunkhash].js',
        },
        plugins: plugins.concat([
            new webpack.optimize.UglifyJsPlugin({
                mangle: false,
                compress: {
                    dead_code: true,
                    unsafe: false,
                    unused: false,
                    hoist_vars: false,
                    side_effects: false,
                    global_defs: {},
                },
            }),

            // new BabiliPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new WebpackAssetsManifest({
                output: 'manifest.json',
                writeToDisk: true,
                sortManifest: true,
                merge: true,
            }),
        ]),
    },
}

export default merge(common, envs[ENV])
