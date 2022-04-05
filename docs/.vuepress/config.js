// .vuepress/config.js
module.exports = {
    title: 'xx平台使用文档',
    // 相对路径
    base: '/',
    head: [
        ['link', { rel: 'icon', href: '/logo.png'}]
    ],  
    port: 8002,
    themeConfig: {
        sidebar: {
            '/guide/': [{
                title: '使用文档',
                collapsable: true, 
                children: [
                    'instruction/demo',
                ]
            }
            ]
        },
    },
    // 导出pdf
    plugins: ['vuepress-plugin-export']
}