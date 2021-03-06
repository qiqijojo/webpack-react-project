# [React Project](https://github.com/qiqijojo/webpack-react-project)

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-airbnb-brightgreen.svg)](https://github.com/airbnb/javascript)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/)
[![stylelint (latest)](https://img.shields.io/npm/v/stylelint/latest.svg?label=stylelint)](https://stylelint.io/)
[![antd (latest)](https://img.shields.io/npm/v/antd/latest.svg?label=antd)](https://ant.design/)
[![@babel/preset-env (latest)](https://img.shields.io/npm/v/@babel/preset-env/latest.svg?label=%40babel%2Fpreset-env)](https://babeljs.io/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/qiqijojo/webpack-react-project/pulls)

以上为库的最新版，不过本人项目中暂未更新

---

## 使用方法

```bash
# 启动命令
npm start

# 切换环境
npm start --qa # qa 环境

# 构建命令
npm run build # （打包若要开启分析器，则需要修改switch文件:`OPEN_WBA: true`）
```

## 功能
包含已完成功能、待完成功能，会不定期更新

具体配置过程中的文档可查阅：[webpack4+react 文档](https://www.jianshu.com/p/00db9107b7db)


- [x] antd 主题修改（修改theme.js文件需重新启动才会生效）
- [x] 代码以及提交（commit）规范（editorConfig、eslint、prettier、stylelint、commitlint
- [x] css Modules支持
- [x] webpack dll 支持
- [x] 打包（减小体积）：资源压缩（js、css、img、font···）
- [x] 打包（提升速度）：应用和dll分离
- [x] 按需加载
- [x] 添加Error Boundary
- [x] 项目目录划分（页面创建-路由添加）
- [x] 定期手动更新版本库
- [x] 添加Travis CI
- [x] CI发布原理（写脚本进行域名、主机映射）
- [x] proxy代理请求（根据npm_config_xx进行域名转换）
- [x] request请求文件配置 
- [x] 分支管理（ts、mobx、rxjs）
- [x] 添加单元测试 - (jasmine-单元测试) + (istanbul-测试覆盖率)
- [x] 命令安装脚手架（初始化）- 原理了解: 查看（https://www.jianshu.com/p/700393f669e3）

**package.json说明：**
* stylelint、url-loader安装了，暂时没用。
