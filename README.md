# Linked List Implementation

A complete implementation of a singly linked list in JavaScript using ES6 modules.

## Features

- **Core Methods**: append, prepend, size, head, tail, at, pop, contains, find, toString
- **Extra Credit**: insertAt, removeAt
- **ES6 Modules**: Modern JavaScript syntax
- **Node.js Compatible**: Runs on Node v22+

## Usage

```javascript
// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

Add console.log(list.toString()); to the end of the file and run it.

( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
