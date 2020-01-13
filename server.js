const express = require('express')
const helmet = require('helmet')

const db = require('./data/db-config.js')

const server = express()

server.use(helmet())
server.use(express.json())

server.get('/api/projects', (req,res) => {
 db('projects as p')
 .leftJoin('resources as r', 'r.id','p.task_id')

})

server.post('/api/resources', (req, res) => {
 console.log(req.body)
 db('resources').insert(req.body)
 .then(ids => {
  res.status(201).json(ids)
 })
 .catch(error => {
   res.status(500).json(error);
 });
});

module.exports = server