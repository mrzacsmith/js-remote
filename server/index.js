require('dotenv').config()
require('colors')
const server = require('./server.js')

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
  console.log(`\n** Server is listening on port ${PORT}`.america)
})
