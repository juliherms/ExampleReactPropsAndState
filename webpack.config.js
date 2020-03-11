const path = require('path');

//configure babel and webpack
module.exports = {
    entry: path.resolve(__dirname,'src','index.js'),
    output: {
        path: path.resolve(__dirname,'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname,'public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader'},
                    { loader: 'css-loader'},
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: {
                    loader: 'file-loader',
                }
            }
        ]
    }
};