module.exports = {
    locales: {
        '/': {
            lang: 'ja-JP',
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
    ]
}