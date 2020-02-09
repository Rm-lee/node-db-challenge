const db = require('./data/db-config')
const mapper = require('./data/helpers/mappers')
module.exports = {
   
    getTasks,
    addRes,
    getAllProjects,
   
}



async function getTasks(){
    return db("projects as p")
    .innerJoin('task as t','p.id','t.project_id')
    .select('t.id','t.notes','t.description','t.completed','p.name','p.description as project_description')
    .then(task => task.map(task => mapper.convertCompleted(task)));
}

function getAllProjects(){
   return db("projects as p")     
    .select()
    .then(projects => projects.map(project => mapper.convertCompleted(project)));
    
}
function addRes(id,project_id){
    console.log(id,project_id)
    return db('project_parts')
    .insert({resource_id:id,project_id:project_id})
}