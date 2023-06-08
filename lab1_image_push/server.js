const express = require('express')

const server = express()

server.get('/', (req, res) => res.send('<h1>Hello World!</h1>'))

const PORT = 5000
server.listen(PORT, () => {
  console.info('Server is listening on port ' + PORT)
})