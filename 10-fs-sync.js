// readFileSync, writeFileSync
const fs = require('fs')
console.log('start')
const first = fs.readFileSync('./content/first.txt', 'utf-8')
const second = fs.readFileSync('./content/second.txt', 'utf-8')

fs.writeFileSync('./content/result-sync.txt', `Here is the result: ${first}\n${second}`, {flag: 'a'})

console.log('done with the task')
console.log('starting the next one')
