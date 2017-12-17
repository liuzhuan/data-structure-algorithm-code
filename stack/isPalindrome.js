const Stack = require('./Stack')

function isPalindrome(word) {
    const s = new Stack()
    for (var i = 0; i < word.length; i++) {
        s.push(word[i])
    }

    let rword = ''
    while (s.length() > 0) {
        rword += s.pop()
    }

    if (word === rword) {
        return true
    }

    return false
}

module.exports = isPalindrome