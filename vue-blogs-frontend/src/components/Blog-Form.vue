<template>
    <div>
        <form @submit="createBlog()">
            <input type="text" v-model="title" placeholder="Title">
            <input type="text" v-model="body" placeholder="Body">
            <button type="submit">Create Blog</button>
        </form>
    </div>
</template>

<script>
    import { store } from '../store'
    export default {
        data() {
            return {
                title: '',
                body: ''
            }
        },
        methods: {
            createBlog() {
                var blog = {
                    title: this.title,
                    body: this.body
                }
                store.createBlog(blog)
                
            }
        }
    }

</script>

<style></style>