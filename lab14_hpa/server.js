const express = require('express')

const server = express()

const APP_NAME = process.env.APP_NAME || 'Groot'
server.get('/', (_, res) => res.send('<h1>Hello World! I am ' + APP_NAME + ' </h1>'))

const inMemoryArray = []
server.get('/heavy-lifting', (_, res) => {
  const data = Buffer.alloc(20 * 1024 * 1024).fill('i') // Allocate 20MB of memory
  inMemoryArray.push(data)
  return res.send('Starting excercise! now I do 20 MB lifting')
})

server.get('/relax', (_, res) => {
  inMemoryArray.pop()
  return res.send('I\'m getting better')
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.info('Server is listening on port ' + PORT)
})