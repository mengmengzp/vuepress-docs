# 文档实时预览解决方案

## 环境说明

node 
## 项目目录说明
```
.vuepress目录

    docs/.vuepress: 用于存放全局的配置、组件、静态资源等。
    docs/.vuepress/styles: 用于存放样式相关的文件。
    docs/.vuepress/styles/index.styl: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件，具有比默认样式更高的优先级
    docs/.vuepress/styles/palette.styl: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
    docs/.vuepress/public: 静态资源目录。
    docs/.vuepress/config.js: 配置文件的入口文件，也可以是 YML 或 toml。

guide为md格式的文档文件
    instruction为用户操作文档
    deploy为运维文档

README.md 为默认首页

```

## 安装环境、调试和打包

```shell
    npm install   // 安装依赖
    npm run docs:dev  // 本地启动
    npm run docs:build  // 本地打包
    vuepress export docs/  // 导出pdf

```
