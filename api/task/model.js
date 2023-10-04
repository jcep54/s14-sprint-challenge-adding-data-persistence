// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks () {
    const tasks = await db('tasks as t')
        .select(
            't.*',
            'p.project_name',
            'p.project_description'
            )
        .join('projects as p', 't.project_id', 'p.project_id')


    const result = tasks.reduce((acc, row) =>{
        return acc.concat({
            ...row,
            task_completed: row.task_completed? true:false
        })
    },[])
    return result
}

async function addTask (payload) {
    const [newTaskId] = await db('tasks').insert(payload)
    const [newTask] = await db('tasks').where('task_id',newTaskId)
    const result = {
        ...newTask,
        task_completed: newTask.task_completed? true: false
    }
    return result
}


module.exports = {
    getTasks,
    addTask
}