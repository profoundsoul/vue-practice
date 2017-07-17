/**
 * Created by mumu on 2017/4/5.
 */
var path = require('path');
module.exports={
    entry:{
        main:'./main.js',
        list:'./list.js'
    },
    output:{
        filename:'[name]-[hash].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: "http://cdn.example.com/assets/[hash]/"
    }
};