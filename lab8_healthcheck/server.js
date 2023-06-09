const express = require('express')

const server = express()

const APP_NAME = process.env.APP_NAME || 'Groot'
server.get('/', (_, res) => res.send('<h1>Hello World! I am ' + APP_NAME + ' </h1>'))

let isDatabaseReady = true
server.get('/database/bomb', () => {
  isDatabaseReady = false
})

// Check all dependency
server.get('/health/liveness', (_, res) => {
  // Check database
  // Check storage
  // Check memory database

  if (!isDatabaseReady) {
    return res.status(500).send('Could not connect to database')
  }

  return res.send('OK')
})

// Check if route is available
server.get('/health/readiness', (_, res) => res.send('OK'))

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.info('Server is listening on port ' + PORT)
})