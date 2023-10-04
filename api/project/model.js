// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProjects () {
    const projects = await db('projects')
    const result = projects.reduce((acc, row) =>{
       return acc.concat({
            project_name: row.project_name,
            project_description: row.project_description,
            project_completed: row.project_completed ? true : false
        })

    },[])
    return result
}

async function addProject (payload) {
    const [newProjectId] = await db('projects').insert(payload)
    const [newProject] = await db('projects').where('project_id',newProjectId)
    const result = {
        ...newProject,
        project_completed: newProject.project_completed? true: false
    }
    return result
}



module.exports = {
    getProjects, 
    addProject
}