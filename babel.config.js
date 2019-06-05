// plugins 在 presets 前执行
module.exports = {
    // plugins 加载顺序，数组从前往后
    plugins: [
        '@babel/plugin-syntax-dynamic-import', // 支持 `() => import('./Home')` 语法
        ['@babel/plugin-proposal-class-properties', { loose: true }], // 支持 `handleChange = () => {}` 语法
        ['babel-plugin-import', { libraryName: 'antd', style: true }] // 按需加载 `antd` 组件， `style: true` 会加载 less 文件
    ],
    // presets 加载顺序，数组从后往前
    presets: ['@babel/react'],
};
