const Stack = require('./Stack')
const print = require('../common/print')

var s = new Stack()
s.push('David')
s.push('Raymond')
s.push('Bryan')
print('length: ' + s.length())
print(s.peek())

var popped = s.pop()
print('The popped element is: ', popped)
print(s.peek())

s.push('Cynthia')
print(s.peek())

s.clear()
print(s.length())
print(s.peek())
s.pop()
print(s.length())

s.push('Clayton')
print(s.peek())