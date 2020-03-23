const db = require('../db-config')

module.exports={
    findTasks,
    findtaskById,
    addTask    
}

//----------find all tasks--
function findTasks(id){
    return db("tasks")
    .select('p.name','p.description','t.task_id','t.notes','t.completed')
    .from('tasks as t')
    .join('projects as p', 'p.project_id', '=', "t.project_id")
    .where("t.project_id", "=", id)   
    }

//-----find task by id---

function findtaskById(task_id){
    return db("tasks")
    .where({task_id})
    .first()
}

//----add task------

async function addTask(task){
    const [id] = await db("tasks").insert(task)
    return findtaskById(id)
}



























//---add using promises---Still has bugs
//-----------add new resource----
// function addTask(task){    
//     return db("tasks")
//     .insert(task)
//     .then(([task_id])=>{
//     return findtaskById(task_id)
//     .then(task=>{
//         return task
//     })
//    })   
// }