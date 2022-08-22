module.exports = {
    title: '时光记忆', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '时光记忆的前端记录', // meta 中的描述文字，用于 SEO 查找
    // 注入到当前页面的 HTML <head> 中的标签
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/logo.svg' }],  // 浏览器的标签栏的网页图标
    ],
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    themeConfig: {
        logo: '/logo.svg', // 标题的图标
        lastUpdated: 'lastUpdate', // string | boolean
        // nav: [
        //     { text: '首页', link: '/' },
        //     {
        //         text: '分类',
        //         ariaLabel: '分类',
        //         items: [
        //             { text: '知识', link: '/pages/daily/css笔记.md' },
        //             { text: '工具', link: '/pages/daily/工具笔记.md' },
        //         ]
        //     },
        //     { text: 'Github', link: '' },
        // ],
        nav: [
            { text: "首页", link: "/" },
            { text: "我的笔记", link: "/pages/daily/工具笔记.md" },
            { text: "前端总结", link: "/javascript/" },
            { text: "生活感悟", link: "/life/" },
            { text: "我的掘金", link: "https://juejin.cn/user/2963939081592974" },
            { text: 'Github', link: 'https://github.com/' }
        ],
        sidebar: {
            '/pages/daily/':[
                {
                    title: '工具笔记',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        ['工具笔记.md', '工具笔记']
                    ]
                },
                {
                    title: 'css笔记',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['css笔记.md', 'css笔记'],
                        ['flex布局.md', 'flex布局']
                    ]
                },
                {
                    title: 'js笔记',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        ['js笔记.md', 'js笔记']
                    ]
                }
            ],
        }
    }
}
