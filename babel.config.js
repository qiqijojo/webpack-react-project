// plugins 在 presets 前执行
module.exports = {
    // plugins 加载顺序，数组从前往后
    plugins: [
        // 按需加载 `antd` 组件， `style: true` 会加载 less 文件
        [
            'babel-plugin-import',
            { libraryName: 'antd', style: true }
        ]
    ],
    // presets 加载顺序，数组从后往前
    presets: ['@babel/react'],
};
