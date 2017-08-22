<template>
    <div>
        <h1>{{ blog.title }}</h1>
        <p>{{ blog.body }}</p>
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
        mounted() {
            this.$store.dispatch('getBlog', this.$route.params.blogId)
        },
        computed: {
            blog(){
                return this.$store.state.activeBlog
            }
        }
    }

</script>

<style></style>