const express = require('express')
const helmet = require('helmet')

const db = require('./data/db-config.js')

const server = express()

server.use(helmet())
server.use(express.json())

server.get('api/', (req,res) => {
 res.status(200).json("working")
})



modules.exports = server