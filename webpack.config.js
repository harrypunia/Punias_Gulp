const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: "./app/assets/js/app.js",
        vendor: "./app/assets/js/vendor.js"
    },
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "[name].js"
    }
    //    module: {
    //        loaders: [
    //            {
    //                test: /\.js$/,
    //                loader: 'babel-loader',
    //                query: {
    //                    presets: ['es2015']
    //                },
    //                exclude: /node_modules/
    //         }
    //      ]
    //    }
}
