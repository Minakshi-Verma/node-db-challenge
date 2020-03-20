const db = require('../db-config')

module.exports={
    findTasks,
    findtaskById,
    addTask    
}

//----------find all tasks--
function findTasks(){
    return db("tasks")
}

//-----find task by id---
function findtaskById(task_id){
    return db("tasks")
    .where({task_id})
    .first()
}

//-----------add new resource----
async function addTask(task){
    const [task_id] = await db("tasks")
    .insert(task)
    return findById(task_id)
}