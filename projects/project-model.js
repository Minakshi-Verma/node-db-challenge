const db = require('../db-config')

module.exports={
    find,
    findById,
    addProject,    
    findTasks,
    addTask
}

//----------find all projects--
function find(){
    return db("projects")
}

//---------find project by id---
function findById(project_id){
    return db("projects")
    .where({project_id})
    .first()
}

//-----------add project---
async function addProject(project){
    const [project_id] = await db("projects").insert(project)
    return findById(project_id)
}

//----------find task----

function findTasks(){
    return db("tasks")
    
}

//----------add task----
async function addTask(task){
    const [task_id] = await db("tasks").insert(task)
    return findById(task_id)
  }
