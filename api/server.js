// build your server here and require it from index.js

const express = require('express');

const server = express()

const resourceRouter = require('./resource/router')
const projectRouter = require('./project/router')

server.use(express.json())

server.use('/api/resources', resourceRouter)
server.use('/api/projects', projectRouter)


server.get('/test', (req, res) =>{
    res.json('server connected')
})



module.exports= server