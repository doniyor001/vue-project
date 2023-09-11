<template>
  <div>
      <Loader v-if="isLoading" class="offset-md-6"/>
      <ArticleDetail v-else/>
  </div>
</template>

<script>
import ArticleDetail from "@/components/ArticleDetail.vue";
import Loader from "@/ui-components/Loader.vue";
import {mapState} from 'vuex'

export default {
    name: "ArticleDetailView",
    components: {Loader, ArticleDetail},
    mounted() {
        this.$store.dispatch('articleDetail', this.$route.params.slug)
    },
    computed:{
        ...mapState({
            isLoading: state => state.articles.isLoading,
        }),
    }
}
</script>

<style scoped>

</style>