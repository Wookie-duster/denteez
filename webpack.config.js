const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'public');

module.exports = {
    entry: {
        service: ['babel-polyfill', `${SRC_DIR}/service.js`],
        contact: ['babel-polyfill', `${SRC_DIR}/contact.js`]
    },
    output: {
        filename: '[name].js',
        path: `${DIST_DIR}/assets/`,
        publicPath: '/assets/'
    },
    // production
    plugins: [
        new UglifyJsPlugin({
            uglifyOptions: {
                minimize: true,
                warnings: false,
                compress: true,
            }
        })
    ],
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader'
            },
            {
                test: /\.gif$/,
                loader: 'url-loader?&mimetype=image/gif'
            },
            {
                test: /\.jpg$/,
                loader: 'url-loader?&mimetype=image/jpg'
            },
            {
                test: /\.png$/,
                loader: 'url-loader?&mimetype=image/png'
            },
            {
                test: /\.svg/,
                loader: 'url-loader?&mimetype=image/svg+xml'
            },
            {
                test: /\.(woff|woff2|ttf|eot|otf)/,
                loader: 'url-loader'
            },
        ]
    },
    // sassLoader: {
    //     data: '@import "__global.scss";',
    //     includePaths: [`${SRC_DIR}`]
    // },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
}