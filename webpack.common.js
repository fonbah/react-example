'use strict'
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry: {
        app: './src/app/main.js',
    },
    module: {
        rules: [
            {
                test: /\.(s[ca]{1}|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: path.resolve(__dirname, 'public/assets')
                        }
                    },
                    'css-loader',
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['public/assets']),
        new HtmlWebpackPlugin({
            title: 'React example',
        }),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: [
                'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
            ],
            append: false,
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].[contenthash].css',
            chunkFilename: '[id].css'
        }),
        new ManifestPlugin()
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'assets/[name].[contenthash].js',
    }
};
