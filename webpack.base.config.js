﻿const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const mainPath = path.resolve(__dirname, "./client/");
const buildPath = path.resolve(__dirname, "./public/assets/");

module.exports = {
    context: mainPath,
    entry:
    {
        vendor: [
            "react",
            "react-dom",
            "redux",
            "react-redux",
            "redux-promise"
        ],
        index: ["./index"],
    },
    output:
    {
        path: buildPath,
        publicPath: "/assets/",
        filename: "[name].js",
        chunkFilename: "[id].js",
    },
    resolve:
    {
        extensions: ["", ".js", ".jsx"]
    },
    module:
    {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [ "babel" ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style", "css")
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style", "css!less")
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: "url?limit=10240"
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                exclude: /node_modules/,
                loader: "url?limit=100000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                exclude: /node_modules/,
                loader: "file"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([buildPath]),
        new webpack.optimize.CommonsChunkPlugin(
            {
                name: "vendor",
                filename: "vendor.js",
                minChunks: Infinity
            }
        ),
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin("res/[name].css"),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
};
