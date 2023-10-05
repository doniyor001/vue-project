<template>
    <p class="text-center display-2">Edit Article</p>
    <Loader v-if="isLoading" class="offset-md-6"></Loader>
    <ArticleForm
    v-else-if="!isLoading && article"
    :initialValue="initialValue"
    :onSubmitHandler="editArticleHandler"
    :clickText="'Edit article'">
    </ArticleForm>
</template>

<script>
import {mapState} from "vuex";
import ArticleForm from "@/components/ArticleForm.vue";
import Loader from "@/ui-components/Loader.vue";
export default {
    name: "EditArticleView",
    components: {Loader, ArticleForm,},
    methods:{
        editArticleHandler(article){
            this.$store
                .dispatch('updateHandler', {article: article, slug:this.$route.params.slug})
                .then(() =>this.$router.push('/'))
        },
    },
    computed:{
        ...mapState({
            article: state => state.articles.articleDetail,
            isLoading: state => state.articles.isLoading,
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