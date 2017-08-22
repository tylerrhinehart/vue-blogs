import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blog from '@/components/Blog'
import BlogForm from '@/components/Blog-Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blogs/:blogId',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/createblog',
      name: 'CreateBlog',
      component: BlogForm
    }
  ]
})
