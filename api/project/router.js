// build your `/api/projects` router here
const router = require('express').Router()
const ProjectMod = require('./model')

router.get('/', async(req, res, next) =>{
    try{
        const projects = await ProjectMod.getProjects()
        res.json(projects)
    }catch(err){
        next(err)
    }

})
router.post('/', async (req, res, next) =>{
    try{
        const newProject = await ProjectMod.addProject(req.body)
        res.status(201).json(newProject)
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