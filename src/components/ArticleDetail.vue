<template>
    <div v-if="article">
        <h1>{{article.title}}}</h1>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: "ArticleDetail",
    computed:{
        ...mapState({
            article: state => state.articles.articleDetail,
        }),
    },
}
</script>

<style scoped>

</style>