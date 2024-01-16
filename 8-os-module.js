
// const { devNull, EOL } = require('os'); // another syntax. destructuring
const os = require('os')

// info avout current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds

console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS);
