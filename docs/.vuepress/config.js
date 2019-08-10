module.exports = {
    head: [
        ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.10.1/css/all.css' }]
    ],
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
        sidebar: [
            ['/','TOP'],
            ['/about/','About']
            // {
            //     title: 'Category',   // required
            //     path: '/',      // optional, which should be a absolute path.
            //     collapsable: true, // optional, defaults to true(trueにするとグループ化する機能がONになる)
            //     sidebarDepth: 1,    // optional, defaults to 1
            //     children: [
            //       'Vue',
            //     ]
            // }
        ],
    }
}