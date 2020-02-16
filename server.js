// const app = require('./app')
import app from './app'
require('dotenv').config()
const server = require('http').Server(app)
server.listen(process.env.PORT,()=>console.log('service running port 8080',process.env.PORT))