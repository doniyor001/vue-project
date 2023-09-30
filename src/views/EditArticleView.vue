<template>
    <p class="text-center display-2">Edit Article</p>
    <ArticleForm
    v-if="article"
    :initialValue="initialValue"
    :onSubmitHandler="editArticleHandler"></ArticleForm>
</template>

<script>
import {mapState} from "vuex";
import ArticleForm from "@/components/ArticleForm.vue";
export default {
    name: "EditArticleView",
    components: {ArticleForm,},
    methods:{
        editArticleHandler(article){
            console.log(article)
        },
    },
    computed:{
        ...mapState({
            article: state => state.articles.articleDetail,
        }),
        initialValue(){
            return{
                title:this.article.title,
                description: this.article.description,
                body:this.article.body,
            }
        }
    },
    mounted() {
        this.$store.dispatch('articleDetail', this.$route.params.slug)
    },
}
</script>

<style scoped>

</style>