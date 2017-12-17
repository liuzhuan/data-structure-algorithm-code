const Stack = require('./Stack')

function mulBase(num, base) {
    const s = new Stack()
    do {
        s.push(num%base)
        num = Math.floor(num/base)
    } while (num > 0)

    let converted = ''
    while (s.length() > 0) {
        converted += s.pop()
    }

    return converted
}

module.exports = mulBase