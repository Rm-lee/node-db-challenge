const express = require('express')
const helmet = require('helmet')

const db = require('./data/db-config.js')

const server = express()

server.use(helmet())
server.use(express.json())

server.get('/api/resources', (req,res) => {
 db('resource as r')
 .then(sources => {
   res.status(200).json(sources)
 })
 .catch(error => {
  res.status(500).json(error);
});
})

//Post resource endpoint
server.post('/api/resources', (req, res) => {

 if(req.body.name){  
  db('resource').insert(req.body)
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
});

//post project endpoint
server.post('/api/project', (req, res) => {
  if(req.body.name){  
    db('project').insert(req.body)
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

//GET projects endpoint
server.get('/api/project', (req,res) => {
  db('project as p')
 
  .then(sources => {
    
    res.status(200).json(sources)
  })
  .catch(error => {
   res.status(500).json(error);
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
  db('task as t')
  .join('project as p', 'p.id', 't.project_id')
  .then(sources => {
    res.status(200).json(sources)
  })
  .catch(error => {
   res.status(500).json(error);
 });
 })
module.exports = server