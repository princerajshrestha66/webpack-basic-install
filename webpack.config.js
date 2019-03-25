const path= require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry:'./index.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
    },
    stats:{
        children:false,
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
              })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("app.css"),
    ]   
}