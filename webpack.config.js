'use strict';

var webpack = require('webpack');


module.exports = {
    entry: {
        app: ['./client/main.jsx']
    },

    resolve: {
        root: './client',
        extensions: ['', '.js', '.jsx']
    },

    output: {
        path: './public',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            { test: /\.jsx$/, exclude: /node_modules/, loader: "6to5-loader"}
        ]
    }
};
