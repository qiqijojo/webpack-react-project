const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const theme = require('../src/theme.js');

const HOST = process.env.HOST || '0.0.0.0'; // 本机IP
const PORT = process.env.PORT || '8080'; // 本机IP
module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        filename: 'js/[name].js',
        chunkFilename: 'js/[id].chunk.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    devServer: {
        // 开启热模块替换（必须配合inline一起使用）--实现实时预览
        hot: true,

        // 可以单独使用 --实现实时预览
        inline: true,

        // 允许访问的机器列表
        allowedHosts: [HOST, 'localhost', '127.0.0.1'],

        // 此选项允许浏览器（默认）使用本地 IP 打开。
        useLocalIp: true,

        // ip地址：`0.0.0.0` 支持 `localhost`、`127.0.0.1`、ip访问
        host: HOST,

        // 服务端口号
        port: PORT,

        // 启动后打开浏览器
        open: true,

        // html5路由
        historyApiFallback: true,

        // 配置devserver http服务器可访问文件
        contentBase: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['eslint-loader'],
                exclude: /node_modules/,
                enforce: 'pre'
            },
            {
                test: /\.(js|jsx)$/,
                use: [{
                    loader: 'babel-loader'
                }],
                exclude: /node_modules/
            },
            {
                test: /\.(css|less)$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]_[local]_[hash:8]'
                        }
                    },
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                            modifyVars: theme
                        }
                    }
                ]
            },
            {
                test: /\.(css|less)$/,
                include: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                            modifyVars: theme
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images/',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'font/',
                            name: '[name].[ext]'
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
            '@': path.resolve(__dirname, '../src'),
            pages: path.resolve(__dirname, '../src/pages'),
            components: path.resolve(__dirname, '../src/components'),
            assets: path.resolve(__dirname, '../src/assets'),
            utils: path.resolve(__dirname, '../src/utils'),
            router: path.resolve(__dirname, '../src/router')
        }
    },
    // nodeJs全局变量/模块，防止webpack注入一些nodeJs的东西到vue中
    node: {
        setImmediate: false,
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
};
