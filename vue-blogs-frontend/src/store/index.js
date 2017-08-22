import $ from 'jquery'
import router from '../router'

var state = {
    blogsArr: []
}

let store = {
    state: state,
    getBlogs(cb) {
        $.get("//localhost:3000/api/blogs")
            .then((data) => {
                state.blogsArr = data
                console.log(state.blogsArr)
                cb(state.blogsArr)
            })
    },
    getBlog(id, cb) {
        $.get("//localhost:3000/api/blogs/" + id)
            .then((blog) => {
                cb(blog)
            })
    },
    createBlog(blog) {
        $.post("//localhost:3000/api/blogs", blog)
            .then((blog) => {
                console.log(blog)
                router.push('/')
            }
        )
    }
}

export { store }