<template>
    <main class="form-signin w-25 m-auto mt-5" >
        <form>
            <img :src="logo" alt="logo" style="width: 100px; cursor: pointer" @click="toHomeHandler" />
            <h1 class="h3 mb-3 fw-normal mt-3">Login</h1>

            <ValidationError v-if="validationErrors" :validationErrors="validationErrors"/>

            <Input :label="'Email address'" :type="'email'"  v-model="email" />
            <Input :label="'Password'" :type="'password'" v-model="password" />

            <Button type="submit" :disabled="isLoading" @click="submitHandler">Login</Button>
        </form>
    </main>
</template>

<script>
import {logo} from "@/contstants";
import Button from "@/ui-components/Button.vue";
import Input from "@/ui-components/Input.vue";
import ValidationError from "@/components/ValidationError.vue";
import {mapState} from 'vuex'

export default {
    name: "Register",
    components: {Input, Button, ValidationError},
    data(){
        return{
            logo,
            email: '',
            password: '',
        }
    },
    computed:{
        ...mapState({
            isLoading: state => state.auth.isLoading,
            validationErrors: state => state.auth.errors,
        }),
        // isLoading(){
        //     return this.$store.state.auth.isLoading
        // },
        // validationErrors(){
        //     return this.$store.state.auth.errors
        // },
    },
    methods:{
        submitHandler(e){
            e.preventDefault()
            const data = {
                username: this.username,
                email: this.email,
                password: this.password
            }
            this.$store
                .dispatch('login', data)
                .then(user => {
                    console.log('USER', user)
                    this.$router.push({name: 'home'})
                })
                .catch(err => console.log('ERROR', err))
        },
    },
}
</script>

<style scoped>

</style>