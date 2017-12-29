// A. Create a stack with methods:
// - push
// - pop
// - head
// - size
// - head
// - dump

// class.Stack.js

class Stack {
    constructor(size) {
        this._size  = size
        this._stack = []
    }

    push(item) {
        if (this._stack.length < this._size) {
            this._stack.push(item)
        } else {
            throw('No push on full stack')
        }
    }

    pop() {
        if (this._stack.length > 0) {
            return this._stack.pop()
        } else {
            throw('No pop on empty stack')
        }
    }

    head() {
        if (this._stack.length > 1) {
            return this._stack[this._stack.length - 1]
        } else {
            throw('No head on empty stack')
        }
    }

    size() {
        return this._stack.length
    }

    dump() {
        for (let item of this._stack.reverse()){
            console.log(`[ ${item} ]`);
        }
    }
}

module.exports = Stack