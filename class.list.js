// class.List.js
class List {
    constructor() {
        this._size = 0;
        this._head = null;
    }

    add(data) {
        const node = new Node(data);
        node.next = this._head;
        this._head = node;
        this._size++;
    }

    size(){
        return this._size;
    }

    head() {
        return this._head;
    }

    remove(){
        if(this._head === null) {
            throw('No remove on empty list')
        } else {
            let currentNode = this._head;

            this._head = currentNode.next;
            currentNode.next = null

            this._size--;

            return currentNode
        }
    }


}

