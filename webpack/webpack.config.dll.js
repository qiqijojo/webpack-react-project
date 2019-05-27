const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        vendor: [ // 提前打包一些基本不怎么修改的文件
            'react',
            'react-dom',
            'antd'
        ]
    },
    output: {
        filename: 'public/dll/[name].dll.js',
        path: path.resolve(__dirname, '../dist'),
        library: '_dll_vendor' // 打包出来的manifest.json和dll.js的name名，最好一致（两者都可不设置，也可设置不一致，都不会报错）
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '../dist/public/dll/vendor-manifest.json'),
            name: '_dll_vendor' // 公开的dll函数的名称，和output. library保持一致即可
        })
    ]
};
