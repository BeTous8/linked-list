# Linked List Implementation

A complete implementation of a singly linked list in JavaScript using ES6 modules.

## Features

- **Core Methods**: append, prepend, size, head, tail, at, pop, contains, find, toString
- **Extra Credit**: insertAt, removeAt
- **ES6 Modules**: Modern JavaScript syntax
- **Node.js Compatible**: Runs on Node v22+

## Usage

```javascript
import LinkedList from './linkedList.js';

const list = new LinkedList();
list.append("A");
list.prepend("B");
console.log(list.toString()); // ( B ) -> ( A ) -> null