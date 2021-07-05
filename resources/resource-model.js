const db = require('../db-config')

module.exports={
    findResources,
    findById,
    addResource    
}

//----------Find all resources---
function findResources(){
    return db("resources")
}

//---------find resource by id--
function findById(resource_id){
    return db("resources")
    .where({resource_id})
    .first()

}

//-----------add new resource----
async function addResource(resource){
    const [resource_id] = await db("resources").insert(resource)
    return findById(resource_id)
}