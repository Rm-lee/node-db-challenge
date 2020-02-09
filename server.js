const express = require('express')
const helmet = require('helmet')

const projectModel = require('./projectModel')

const db = require('./data/db-config.js')

const server = express()

server.use(helmet())
server.use(express.json())


server.get('/', (req,res) => {
res.status(200).json({message: "workings"})
})
//get resources
server.get('/api/resources', (req,res) => {
 db('resource as r')
 .then(sources => {
   res.status(200).json(sources)
 })
 .catch(error => {
  res.status(400).json(error);
});
})

//Post resource endpoint
server.post('/api/resources', (req, res) => {
  console.log(req.body.name)
  const project_id = req.body.project_id;
 if(req.body.name){  
  db('resource').insert({name:req.body.name,description:req.body.description})
 .then(id => {
  const [rid] = id
   projectModel.addRes(rid,project_id)
   .then(id => {
    res.status(201).json(id)
   })
   
 })
 .catch(error => {
   res.status(400).json(error);
 });
}
else{
  res.status(400).json({message: "Must include Name"})
}
});

//post project endpoint
server.post('/api/project', (req, res) => {
  if(req.body.name){  
    db('projects').insert(req.body)
   .then(id => {
    res.status(201).json(id)
   })
   .catch(error => {
     res.status(500).json(error);
   });
  }
  else{
    res.status(400).json({message: "Must include Name"})
  }
})
//get res for proj
server.get('/api/project/res/:id', (req,res) => {
  const id = req.params.id
    db('project_parts as r')
    .where('r.project_id',id)
     
  .then(sources => {
    
    res.status(200).json(sources)
  })
  .catch(error => {
   res.status(400).json(error);
 });
 })
//GET projects endpoint
server.get('/api/project', (req,res) => {
  projectModel.getAllProjects()
     
  .then(sources => {
    
    res.status(200).json(sources)
  })
  .catch(error => {
   res.status(400).json(error);
 });
 })

 //post task endpoint
 server.post('/api/task', (req, res) => {
  if(req.body.description){  
    db('task').insert(req.body)
   .then(id => {
    res.status(201).json(id)
   })
   .catch(error => {
     res.status(500).json(error);
   });
  }
  else{
    res.status(400).json({message: "Must include description"})
  }
})

//GET task endpoint
server.get('/api/task', (req,res) => {
  projectModel.getTasks()
  .then(tasks => {
    res.status(200).json(tasks)
  })
  .catch(error => {
   res.status(500).json(error);
 });
 })
module.exports = server