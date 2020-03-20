const db = require('../db-config')

module.exports={
    find,
    findById,
    addProject,    
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

//----------

function findTasks(){
    return db("tasks")
   
}

//----------
async function addTask(task){
    const [task_id] = await db("tasks").insert(task)
    return findById(task_id)
  }
