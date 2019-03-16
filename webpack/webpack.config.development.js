const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    devServer: {
        hot: true, // 开启热模块替换（必须配合inline一起使用）--实现实时预览
        inline: true, // 可以单独使用 --实现实时预览
        host: '0.0.0.0',
        port: 8080,
        // historyApiFallback: true,
        contentBase: path.resolve(__dirname, '../dist') // 配置devserver http服务器可访问文件
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['eslint-loader'],
                exclude: /node_modules/,
                enforce: 'pre'
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['@babel/react'] }
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html'
        })
    ]
};
