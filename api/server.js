// build your server here and require it from index.js

const express = require('express');

const server = express()

server.use(express.json())


server.get('/test', (req, res) =>{
    res.json('server connected')
})



module.exports= server