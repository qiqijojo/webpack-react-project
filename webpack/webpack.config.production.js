const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

let manifestJson = null;
try {
    manifestJson = require(path.resolve(__dirname, '../dist/public/dll/vendor-manifest.json'));
} catch (error) {
    console.error('【构建失败】您开启了 DLL 功能，但我没有找到 dll 文件');
    console.info('请先执行\n\tnpm run build:dll\n以生成 dll 文件');
    process.exit(0);
}
module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        filename: 'public/js/[name].[hash:8].js',
        chunkFilename: 'public/js/[name].[hash:8].chunk.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/' // 构建资源存放路径（绝对路径）
    },
    optimization: {
        minimizer: [
            // 压缩js
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: false,
                terserOptions: {
                    ecma: undefined,
                    warnings: false,
                    parse: {},
                    compress: {
                        drop_debugger: true, // 删除 debugger
                        drop_console: true, // 删除 console
                    },
                    mangle: true, // 不跳过错误的名称
                    module: false,
                    output: null,
                    toplevel: false,
                    nameCache: null,
                    ie8: false,
                    keep_classnames: undefined,
                    keep_fnames: false,
                    safari10: true,
                },
            }),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css\.*(?!.*map)/g, // 注意不要写成 /\.css$/g
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {
                    // 使用安全模式，避免 cssnano 重新计算 z-index
                    safe: true,

                    // 默认不移除许可证注释，这里移除所有
                    discardComments: { removeAll: true },

                    // cssnano通过移除注释、空白、重复规则、过时的浏览器前缀以及做出其他的优化来工作，一般能减少至少 50% 的大小
                    // cssnano 集成了autoprefixer的功能
                    // 会使用到autoprefixer进行无关前缀的清理
                    // 关闭autoprefixer功能
                    // 使用postcss的autoprefixer功能
                    autoprefixer: false,
                },
                canPrint: true
            })
        ],
        splitChunks: {
            chunks: 'all', // 表示显示块的范围，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)，默认为all
            cacheGroups: { // 缓存组默认将node_modules中的模块拆分带一个叫做vendors的代码块中
                vendor: {
                    test: /node_modules/,
                    name: 'vendor', // 决定打包的chunk前缀名
                    chunks: 'initial',
                    enforce: true,
                },
            },
        }
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
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
            manifest: manifestJson
        }),
        // 将第三方打包文件vendor.dll.js动态添加进html里
        new HtmlWebpackIncludeAssetsPlugin({
            assets: ['public/dll/vendor.dll.js'],
            append: false // false 在其他资源的之前添加 true 在其他资源之后添加
        }),
        new BundleAnalyzerPlugin({
            analyzerPort: 8081
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
