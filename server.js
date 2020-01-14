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

module.exports = server