<template>
    <div>
        <h2>記事一覧</h2>
        <div v-for="post in posts">
            <h2><a v-bind:href="post.path">{{post.title}}</a></h2>
            <p><i class="far fa-calendar fa-fw"></i>{{post.frontmatter.date}}</p>
            <a v-bind:href="post.path"><i class="fas fa-folder fa-fw"></i>{{post.frontmatter.category}}</a>
            <!-- <p>{{post.frontmatter.description}}</p>
            <a v-bind:href="post.path">続きを読む</a> -->
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        posts() {
            return this.$site.pages
            //_postsディレクトリ以下を投稿記事一覧表示の対象にする
            .filter(post => post.path.startsWith('/_posts/'))
            //dateに設定した日付の降順にソートする
            .sort((a,b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        }
    }
}
</script>
