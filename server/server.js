const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

const server = express()

server.use(helmet())
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())

const currentTime = new Date().toLocaleTimeString()

// @desc			Test endpoint is working
// @route 		GET /test
server.get('/test', (req, res) => {
  res.status(200).json({
    status: 200,
    path: req.originalUrl,
    message: `Test endpoint is live at ${currentTime}`,
    author: 'Github @MrZacSmith',
  })
})

module.exports = server
