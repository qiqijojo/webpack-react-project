const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        filename: 'public/js/[name].[hash:8].js',
        chunkFilename: 'public/js/[id].[hash:8].chunk.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/' // 构建资源存放路径（绝对路径）
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader'
                }],
                exclude: /node_modules/
            },
            {
                test: /\.(css|less)$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
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
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.(css|less)$/,
                include: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
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
                            outputPath: 'public/images/',
                            name: '[name].[hash:8].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader' // 对图片的压缩使用相应的默认配置
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'public/font/',
                            name: '[name].[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['public', 'index.html'], {
            root: path.resolve(__dirname, '../dist'),
            exclude: ['dll'] // clean时，不删除dll文件夹
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'public/css/[name].[hash:8].css',
            chunkFilename: 'public/css/[id].[hash:8].chunk.css'
        }),
        // webpack读取到vendor的manifest文件对于vendor的依赖不会进行编译打包
        new webpack.DllReferencePlugin({
            manifest: require(path.resolve(__dirname, '../dist/public/dll/vendor-manifest.json'))
        }),
        // 将第三方打包文件vendor.dll.js动态添加进html里
        new HtmlWebpackIncludeAssetsPlugin({
            assets: ['public/dll/vendor.dll.js'],
            append: false // false 在其他资源的之前添加 true 在其他资源之后添加
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
