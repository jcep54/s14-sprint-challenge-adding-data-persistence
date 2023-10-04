// build your `/api/tasks` router here
const router = require('express').Router()
const TaskMod = require('./model')

router.get('/',async (req,res,next) =>{
    try{
        const tasks = await TaskMod.getTasks()
        res.json(tasks)
    }catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next) =>{
    try{
        const newTask = await TaskMod.addTask(req.body)
        res.status(201).json(newTask)
    }catch(err){
        next(err)
    }
})



router.use((err, req, res, next) =>{ // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message
    })
})



module.exports= router