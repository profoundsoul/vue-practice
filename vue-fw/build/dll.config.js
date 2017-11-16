const webpack = require('webpack');
const path = require('path');
const UglifyJsParallelPlugin = require('webpack-uglify-parallel');
const os = require('os');

const  dllDist = '../dlldist';

module.exports = {
    context: path.join(__dirname, '../'),
    output: {
        path: path.join(__dirname, dllDist),
        filename: '[name].dll.js',
        library: '[name]_[hash]',
    },
    entry: {
        "vendor": [
            'vue',
            'vuex',
            'vue-router',
            'axios',
            'vue-axios',
            'd3',
            'fastclick',
            'query-string'
        ],
    },
    plugins: [
        new UglifyJsParallelPlugin({
            workers: os.cpus().length,
            mangle: true,
            exclude: /\.min\.js$/,
            output: { comments: false },
            compressor: {
                warnings: false,
                drop_console: true,
                drop_debugger: true
            }
        }),
        new webpack.DllPlugin({
            path:  path.join(__dirname, dllDist, '[name]-manifest.json'),
            name: '[name]_[hash]',
        })
    ]
};