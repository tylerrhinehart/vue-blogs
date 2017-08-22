import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'
import router from '../router'

vue.use(vuex)

var store = new vuex.Store({
    state: {
        blogs: [],
        activeBlog: {},
    },
    mutations: {
        updateBlogs(state, blogs) {
            state.blogs = blogs
        },
        setActiveBlog(state, blog) {
            state.activeBlog = blog
        },
        addBlog(state, blog) {
            state.blogs.push(blog)
        },
    },
    actions: {
        getBlogs({ commit, dispatch }) {
            $.get("//localhost:3000/api/blogs")
                .then((blogs) => {
                    commit('updateBlogs', blogs)
                })
        },
        getBlog({ commit, dispatch }, id) {
            $.get("//localhost:3000/api/blogs/" + id)
                .then((blog) => {
                    commit('setActiveBlog', blog)
                })
        },
        createBlog({ commit, dispatch }, blog) {
            console.log(blog)
            $.post("//localhost:3000/api/blogs", blog)
                .then((actualBlog) => {
                    commit('addBlog', actualBlog)
                    router.push('/blogs/' + actualBlog._id)
                }).fail(err => {
                    console.error(err)
                })
        }
    }
})

// var state = {
//     blogsArr: []
// }

// let store = {
//     state: state,
//     getBlogs(cb) {
//         $.get("//localhost:3000/api/blogs")
//             .then((data) => {
//                 state.blogsArr = data
//                 console.log(state.blogsArr)
//                 cb(state.blogsArr)
//             })
//     },
//     getBlog(id, cb) {
//         $.get("//localhost:3000/api/blogs/" + id)
//             .then((blog) => {
//                 cb(blog)
//             })
//     },
//     createBlog(blog) {
//         $.post("//localhost:3000/api/blogs", blog)
//             .then((blog) => {
//                 console.log(blog)
//                 router.push('/')
//             }
//         )
//     }
// }

export { store }