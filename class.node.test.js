
// class.Node.test.js
const Node = require('./class.node')

describe('Node', () =>{
    let node

    beforeEach(() => {
        node = new Node('Judas')
    })

    test('setup', () =>{
        expect(node).toBeInstanceOf(Node)
    })

    test('checking data value', () =>{
        expect(node.data).toBe('Judas')
    })

    test('checking data update', () =>{
        node.data = 'Paul'
        expect(node.data).toBe('Paul')
    })

    test('checking next', () =>{
        expect(node.next).toBeNull()
    })
})
