const isPalindrome = require('./isPalindrome')
const print = require('../common/print')

let word = 'hello'
if (isPalindrome(word)) {
    print(`${word} is a palindrome`)
} else {
    print(`${word} is not a palindrome`)
}

word = 'racecar'
if (isPalindrome(word)) {
    print(`${word} is a palindrome`)
} else {
    print(`${word} is not a palindrome`)
}