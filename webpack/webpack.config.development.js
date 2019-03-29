const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        filename: 'public/js/[name].js',
        chunkFilename: 'public/js/[id].chunk.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
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
                    loader: 'babel-loader'
                }],
                exclude: /node_modules/
            },
            {
                test: /\.(css|less)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html'
        })
    ],
    resolve: {
        alias: {
            pages: path.resolve(__dirname, '../src/pages'),
            components: path.resolve(__dirname, '../src/components'),
            assets: path.resolve(__dirname, '../src/assets'),
            utils: path.resolve(__dirname, '../src/utils')
        }
    }
};
