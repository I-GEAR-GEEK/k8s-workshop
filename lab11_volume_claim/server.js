const fs = require('fs')
const express = require('express')

const server = express()

const APP_NAME = process.env.APP_NAME || 'Groot'
server.get('/', (_, res) => res.send('<h1>Hello World! I am ' + APP_NAME + ' </h1>'))

server.get('/generate-report', async (_, res) => {
  const content = `${new Date()}: Hello from previous node\n`
  await fs.writeFileSync('container-volume/report.txt', content)
  return res.send('"report.txt" has been generated')
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.info('Server is listening on port ' + PORT)
})