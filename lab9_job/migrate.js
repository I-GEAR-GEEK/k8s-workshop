const memorySize = 1024 * 1024 * 50 // 50 MB
const buffer = Buffer.alloc(memorySize)

console.log(`${new Date()} Start migration...`)

// Demonstrate memory usage
for (let i = 0; i < memorySize; i++) {
  buffer[i] = Math.floor(Math.random() * 256);
}

setTimeout(() => {
  console.log(`${new Date()} Migration success`)
  process.exit(0)
}, 5000)