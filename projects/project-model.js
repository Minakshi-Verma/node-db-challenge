const db = require('../db-config')

module.exports={
    find,
    findById,
    addProject,
    findResources,
    addResource,
    findTasks,
    addTask
}

//----------
function find(){
    return db("projects")
}

//---------
function findById(project_id){
    return db("projects")
    .where({project_id})
    .first()

}

//-----------
async function addProject(project){
    const [project_id] = await db("projects").insert(project)
    return findById(project_id)
}

//------------
function findResources(){
    return db("resources")
    
}

//----------
function addResource(){

}

//----------

function findTasks(){

}

//----------
function addTask(){

}
