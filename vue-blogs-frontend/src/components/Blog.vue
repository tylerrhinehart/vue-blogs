<template>
    <div>
        <h1>{{ blog.title }}</h1> 
        <p>{{ blog.body}}</p>
    </div>
</template>

<script>
    import { store } from '../store'
    export default {
        data() {
            return {
                id: this.$route.params.blogId,
                blog: {}
            }
        },
        methods: {
            getBlog() {
                store.getBlog(this.id, this.drawBlog)
            },
            drawBlog(blog) {
                this.blog = blog
                console.log(this.blog)
            }
        },
        mounted() {
            console.log('ABOUT IS READY')
            console.log("WHAT IS THIS?", this.$route.params.blogId)
            this.getBlog()
        }
    }

</script>

<style></style>