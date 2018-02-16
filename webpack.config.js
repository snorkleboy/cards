
var path = require("path");
var webpack = require("webpack");


module.exports = {
    context: __dirname,
    entry: './src/entry.js',
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
};








