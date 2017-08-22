<template>
  <div class="home">
    <h1>Blogs</h1>
    <ul>
      <li v-for="blog in blogs">
        <router-link :to="{name: 'Blog', params: { blogId:  blog._id } }">{{blog.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { store } from '../store'
  export default {
    name: 'home',
    data() {
      return {
        blogs: []
      }
    },
    methods: {
      drawBlogs(arr) {
        this.blogs = arr
        console.log(this.blogs)
      }
    },
    mounted() {
      store.getBlogs(this.drawBlogs)
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>