// Modules

// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)


// const varFrom5 = 'i am future'

const names = require('./4-names')
const sayHelloGently = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
sayHelloGently('susan')
sayHelloGently(names.john)
sayHelloGently(names.peter)
