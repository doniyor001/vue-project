<template>
    <div class="w-50 mx-auto">
        <form @submit.prevent>
            <Input type="text" label="Title" v-model="title"/>
            <TextArea type="text" label="Description" v-model="description"/>
            <TextArea type="text" label="Body" v-model="body"/>
            <Button @click="editArticle">Edit Article</Button>
        </form>
    </div>
</template>

<script>
import TextArea from "@/ui-components/TextArea.vue";
import Button from "@/ui-components/Button.vue";
import Input from "@/ui-components/Input.vue";

export default {
    name: "ArticleForm",
    components: {Input, Button, TextArea},
    props:{
        initialValue:{
            type: Object,
            required: true,
        },
        onSubmitHandler: {
            type: Function,
            required: true,
        },
    },
    data(){
        return{
            title: this.initialValue.title,
            description: this.initialValue.description,
            body: this.initialValue.body,
        }
    },
    methods:{
        editArticle() {
            const article = {
                title: this.title,
                body: this.body,
                description: this.description,
                tagList: [],
            }
            this.onSubmitHandler(article)
        }
    }
}
</script>

<style scoped>

</style>