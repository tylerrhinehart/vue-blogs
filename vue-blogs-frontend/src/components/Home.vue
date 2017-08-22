<template>
  <div class="home">
    <h1>Blogs</h1>
    <div v-for="blog in blogs">
      <div class="col-xs-6 col-xs-offset-3 thumbnail">
        <router-link :to="{name: 'Blog', params: { blogId:  blog._id } }" class="btn btn-default">{{blog.title}}</router-link>
      </div>
    </div>
    <!-- <ul>
      <li v-for="blog in blogs">
        <router-link :to="{name: 'Blog', params: { blogId:  blog._id } }">{{blog.title}}</router-link>
      </li>
    </ul> -->
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
      }
    },
    methods: {
    },
    computed: {
      blogs() {
        return this.$store.state.blogs
      }
    },
    mounted() {
      this.$store.dispatch('getBlogs')
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