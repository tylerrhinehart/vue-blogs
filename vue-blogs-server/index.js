var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var blogRoutes = require('./routes/blog-routes')
var server = express();
var port = 3000;
var cors = require('cors')



//MIDDLEWARE

server.use(cors())
server.options('*', cors())
//server.use(express.static(__dirname + "/public"))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.use('/api/blogs', blogRoutes)

server.listen(port, () => {
    console.log("starting up Node, on port", port)
})

var dbConnect = require("./config/db/mlab-config");