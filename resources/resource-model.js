const db = require('../db-config')

module.exports={
    findResources,
    findById,
    addResource,
    
}

//----------
function findResources(){
    return db("resources")
}

//---------
function findById(resource_id){
    return db("resources")
    .where({resource_id})
    .first()

}

//-----------
async function addResource(resource){
    const [resource_id] = await db("resources").insert(resource)
    return findById(resource_id)
}