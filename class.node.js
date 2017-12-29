// class.Node.js

class Node {
    constructor(data) {
        this._data = data;
        this._next = null;
    }

    get data() {
        return this._data;
    }

    set data(data) {
        this._data = data;
    }

    get next() {
        return this._next;
    }

    set next(next) {
        this._next = next;
    }
}

module.exports = Node;