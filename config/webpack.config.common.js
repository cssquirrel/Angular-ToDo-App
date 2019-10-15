'use strict';

const webpack = require('webpack');

const CleanWebpackPlugin   = require('clean-webpack-plugin');
const HtmlWebpackPlugin    = require('html-webpack-plugin');

const helpers              = require('./helpers');
const isDev                = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        vendor: './src/vendor.ts',
        polyfills: './src/polyfills.ts',
        main: isDev ? './src/main.ts' : './src/main.aot.ts'
    },

    resolve: {
        extensions: ['.ts', '.js', '.scss']
    },

    module: {
        rules: [
            { test: /[\/\\]@angular[\/\\].+\.js$/, parser: { system: true } }, //https://stackoverflow.com/questions/53913138/what-is-angular-compilation-warning-about-system-import-deprecation
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    { loader: 'style-loader', options: { sourceMap: isDev } },
                    { loader: 'css-loader', options: { sourceMap: isDev } },
                    { loader: 'sass-loader', options: { sourceMap: isDev } }
                ],
                include: helpers.root('src', 'assets')
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'to-string-loader',
                    { loader: 'css-loader', options: { sourceMap: isDev } },
                    { loader: 'sass-loader', options: { sourceMap: isDev } }
                ],
                include: helpers.root('src', 'app')
            }
        ]
    },

    plugins: [
        // Workaround for Critical dependency 
        // The request of a dependency is an expression in ./node_modules/@angular/core/fesm5/core.js
        new webpack.ContextReplacementPlugin(
            /\@angular(\\|\/)core(\\|\/)fesm5/,
            helpers.root('./src'),
            {}
        ),
        new CleanWebpackPlugin(
            helpers.root('dist'), { root: helpers.root(), verbose: true }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};