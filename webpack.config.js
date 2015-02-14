'use strict';

var webpack = require('webpack');
var path = require('path');


// 'webpack/hot/dev-server'


module.exports = {


    entry: {
        app: ['./client/main.jsx']
    },
    output: {
        path: './build',
        filename: 'bundle.js'
    },

    resolve: {
        root: path.join(__dirname, '/client'),
        extensions: ['', '.js', '.jsx']
    },
    
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "6to5-loader?experimental"},
            //{test: /\.(jpe?g|png|gif|svg)$/i, loaders: ['image?bypassOnDebug&optimizationLevel=7&interlaced=false']}
        
        ]
    }
};
