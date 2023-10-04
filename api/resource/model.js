// build your `Resource` model here
const db = require('../../data/dbConfig')

async function getResources () {
    const resources = await db('resources')

    return resources
}

async function addResource (payload) {
    const [newResourceId] = await db('resources').insert(payload)
    const [newResource] = await db('resources').where('resource_id',newResourceId)
    return newResource
}





module.exports = {
    getResources,
    addResource
}