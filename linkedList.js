import Node from './node.js';

export class LinkedList {
    constructor() {
        this.head = null;
    }


    append(value) {
        // create new node
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            return;
        }
        
        // traverse through the nodes to find the last node
        let currentNode = this.head;
        while(currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }

        // attach the new node to the current node
        currentNode.nextNode = newNode
    }

    prepend(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            return;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        
    }

    size() {
        let counter = 1;
        let currentNode = this.head;

        if (this.head === null) return 0;
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
            counter += 1;
        }
        return counter;
    }

    Head() {
        return this.head;
    }

    tail() {
        if (this.head === null) return null;

        let currentNode = this.head;
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    at(index) {
        if (!Number.isInteger(index) || index < 0) return 'invalid input';

        if (this.head === null) return 'no list available';

        let counter = 0;
        let currentNode = this.head;

        while (counter < index && currentNode !== null) {
            counter +=1 ;
            currentNode = currentNode.nextNode;
        }

        return currentNode;

    }

    pop() {
        if (this.head === null) return null;

        if (this.head.nextNode === null) {
            const removedValue = this.head.value;
            this.head = null;
            return removedValue
        }

        let currentNode = this.head;
        let previousNode = null;

        while (currentNode.nextNode !== null) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }

        const removedValue = currentNode.value;
        previousNode.nextNode = null;
        return removedValue;
    }

    contains(value) {
        if (this.head === null) return false;

        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === value) return true;
            currentNode = currentNode.nextNode;
            
        }

        return false;
        
    }

    find(value) {
        if (this.head === null) return null;

        let counter = 0;
        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.value === value) {
                return counter;
            }
            currentNode = currentNode.nextNode;
            counter += 1;
        }

        return null;
    }

    toString() {
        if (this.head === null) return 'null';

        let currentNode = this.head;
        let accumulator = '';

        while (currentNode !== null) {
            accumulator += "(" + currentNode.value + ")";
            if (currentNode.nextNode !== null) {
                accumulator += " -> "
            } else {
                accumulator += " -> null"
            }
            currentNode = currentNode.nextNode;
        }

        return accumulator;
    }

    // Extra Credits

    insertAt(value, index) {
        

        let currentNode = this.head;
        let previousNode = null;
        let counter = 0;

        if (!Number.isInteger(index) || index < 0) {
            return false;
        }

        if (index === 0) {
            this.prepend(value);
            return true;
        }

        if (index === this.size()) {
            this.append(value);
            return true;
        }

        if (this.head === null) return false;

        while(currentNode !== null) {
            
            if (counter === index) {
                const insertedNode = new Node(value);
                previousNode.nextNode = insertedNode;
                insertedNode.nextNode = currentNode;
                return true;
            }
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
            counter += 1;

        }

        return false;
    }

    removeAt(index) {
        if (!Number.isInteger(index) || index < 0) return false;

        // if we are at the head
        if (index === 0) {
            this.head = this.head.nextNode
            return true;
        }

        // if in the middle
        const preNode = this.at(index - 1);
        const postNode = this.at(index + 1);
        preNode.nextNode = postNode;

        // if at the end
        if (index === this.size()) {
            preNode.nextNode = null;
        }

        if (this.head === null) return false;

    }
}
