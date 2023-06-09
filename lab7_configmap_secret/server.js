const express = require('express')

const server = express()

const APP_NAME = process.env.APP_NAME || 'Groot'
server.get('/', (req, res) => res.send('<h1>Hello World! I am ' + APP_NAME + ' </h1>'))

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.info('Server is listening on port ' + PORT)
})