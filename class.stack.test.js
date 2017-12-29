
// class.Stack.test.js

const Stack = require('./class.Stack')

describe('STACK', () => {

    const STACK_SIZE = 7
    let stack

    beforeEach(() => {
        stack = new Stack(STACK_SIZE)
    })

    // initialize

    test('setup', () => {
        expect(stack).toBeInstanceOf(Stack)
    })

    // push+pop+size
    test('push one item', () => {
        expect(stack.size()).toBe(0)
        stack.push('A')
        expect(stack.size()).toBe(1)
    })

    test('push one item and pop one', () => {
        stack.push('A')
        expect(stack.size()).toBe(1)
        expect(stack.pop()).toBe('A')
        expect(stack.size()).toBe(0)
    })

    test('push two items and pop one', () => {
        stack.push('A')
        stack.push('B')
        expect(stack.size()).toBe(2)
        expect(stack.pop()).toBe('B')
        expect(stack.size()).toBe(1)
    })

    test('push two items and pop two', () => {
        stack.push('A')
        stack.push('B')
        expect(stack.size()).toBe(2)
        expect(stack.pop()).toBe('B')
        expect(stack.size()).toBe(1)
        expect(stack.pop()).toBe('A')
        expect(stack.size()).toBe(0)
    })

    // error

    test('head through empty stack', () => {
        try {
            stack.head()
        } catch(err) {
            expect(err).toBe('No head on empty stack')
        }
    })

    test('pop through empty stack', () => {
        try {
            stack.pop()
        } catch(err) {
            expect(err).toBe('No pop on empty stack')
        }
    })

    test('push on filled stack', () => {
        for (let i = 0; i < STACK_SIZE - 1; i++) {
            stack.push(i)
        }

        try {
            stack.push('A')
        } catch(err) {
            expect(err).toBe('No push on full stack')
        }
    })

    test('dump stack', () => {
        for (let i = 0; i < STACK_SIZE - 1; i++) {
            stack.push(i)
        }
        expect(stack.dump()).toBeUndefined()
    })
})

// A. Create a single-linked list with methods:
// - add
// - remove
// - head
// - size
// - searchNodeAt
// - dump

// [ N ] -> [ N ] -> [ N ] -> NULL