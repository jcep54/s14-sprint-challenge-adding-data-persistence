// build your server here and require it from index.js

const express = require('express');

const server = express()

const resourceRouter = require('./resource/router')
const projectRouter = require('./project/router')
const taskRouter = require('./task/router')

server.use(express.json())

server.use('/api/resources', resourceRouter)
server.use('/api/projects', projectRouter)
server.use('/api/tasks', taskRouter)


server.get('/test', (req, res) =>{
    res.json('server connected')
})



module.exports= server