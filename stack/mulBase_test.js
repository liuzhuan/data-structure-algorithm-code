const mulBase = require('./mulBase')
const print = require('../common/print')

let num = 32
let base = 2
let newNum = mulBase(num, base)
print(`${num} converted to base ${base} is ${newNum}`)

num = 125
base = 8
newNum = mulBase(num, base)
print(`${num} converted to base ${base} is ${newNum}`)