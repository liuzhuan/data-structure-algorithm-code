function Stack() {
    this.dataStore = []
    this.top = 0
    this.push = push
    this.pop = pop
    this.peek = peek
    this.clear = clear
    this.length = length
}

function push(element) {
    this.dataStore[this.top++] = element
}

function peek() {
    return this.dataStore[this.top - 1]
}

function pop() {
    if (this.top > 0) {
        return this.dataStore[--this.top]
    }

    return null
}

function clear() {
    this.top = 0
}

function length() {
    return this.top
}

module.exports = Stack