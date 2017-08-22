<template>
    <div>
        <form @submit="createBlog()">
            <input type="text" v-model="title" placeholder="Title">
            <wysiwyg v-model="myHTML" />
            <button type="submit">Create Blog</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                myHTML: '',
                title: '',
                body: '',
            }
        },
        methods: {
            createBlog() {
                var blog = {
                    title: this.title,
                    body: this.myHTML
                }
                this.$store.dispatch("createBlog", blog)

            }
        }
    }

</script>

<style></style>