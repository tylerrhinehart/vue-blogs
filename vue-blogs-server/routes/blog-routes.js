var express = require('express')
var router = express.Router()
var blogs = require('../models/blog')

router
    .get('/', (req, res, next) => {
        blogs.find({})
            .then(blogs => {
                res.send(blogs)
            })
            .catch(next)
    })
    .get('/:id', (req, res, next) => {
        blogs.findById(req.params.id)
            .then(blog => {
                res.send(blog)
            }).catch(next)
    })
        .post('/', (req, res, next) => {
            blogs.create(req.body)
                .then(blogs => {
                    console.log(blogs)
                    res.send(blogs)
                }).catch(next)
        })
        .delete('/:id', (req, res, next) => {
            blogs.findByIdAndRemove(req.params.id)
                .then(blogs => {
                    res.send({ message: 'Successfully Removed' })
                }).catch(next)
        })

router.use('/', (err, req, res, next) => {
    if (err) {
        res.send(418, {
            success: false,
            error: err.message
        })
    } else {
        res.send(400, {
            success: false,
            error: 'Something failed please try again later'
        })
    }
})

module.exports = router
