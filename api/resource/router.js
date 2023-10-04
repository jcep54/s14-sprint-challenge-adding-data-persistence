// build your `/api/resources` router here
const router = require('express').Router()

const ResourceMod = require('./model')

router.get('/', async (req,res, next) =>{
    try{
        const resources = await ResourceMod.getResources()
        res.json(resources)
    } catch(err){
        next(err)
    }
})

router.post('/', async (req,res, next) =>{
    try{
        const newResource = await ResourceMod.addResource(req.body)
        res.json(newResource)
    }catch(err){
        next(err)
    }
})

router.use((err, req, res, next) =>{ // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message
    })
})


module.exports = router