<template>
    <div>
        <h1>{{ blog.title }}</h1>
        <div v-html="blog.body"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
        },
        beforeCreate() {
            this.$store.dispatch('getBlog', this.$route.params.blogId)
        },
        computed: {
            blog() {
                return this.$store.state.activeBlog
            }
        }
    }

</script>

<style></style>