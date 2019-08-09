module.exports = {
    title: 'technical-notes',
    description: 'My technical notes.',
    locales: {
        '/': {
            lang: 'ja',
        },
    },
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': '' // UA-00000000-0
            },
            '@vuepress/blog',
            {
                /*options*/
            },
        ]
    ],
    themeConfig: {
        sidebar: 'auto',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about.html' },
            { text: 'SNS',
                items: [
                    { text: 'Facebook', link: 'https://www.facebook.com/kurocraft0312' },
                    { text: 'Twitter', link: 'https://twitter.com/kurocraft7522' },
                    { text: 'GitHub', link: 'https://github.com/kurocraft0312' }
                ] },
            { text: 'Contact', link: '/contact.html' }
        ],
        // sidebar: [
        //     ['/','Home'],
        //     ['/about/','About']
        // ],
        // sidebarDepth: 2
    }
}