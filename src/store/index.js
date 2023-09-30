import { createStore } from 'vuex'
import auth from '../modules/auth'
import articles from "@/modules/articles";
import createArticle from "@/modules/create-article";

// Create a new store instance.
const store = createStore({
    state: {},
    mutations: {},
    actions:{},
    modules:{auth, articles, createArticle}
})

export default store