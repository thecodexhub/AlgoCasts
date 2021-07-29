// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(record) {
    // const node = new Node(record);
    // node.next = this.head;
    // this.head = node;
    this.insertAt(record, 0);
  }

  size() {
    let count = 0;
    let temp = this.head;
    while (temp) {
      count++;
      temp = temp.next;
    }

    return count;
  }

  getFirst() {
    // return this.head;
    return this.getAt(0);
  }

  getLast() {
    // let node = this.head;
    // if (!this.head) return null;
    // while (node.next) node = node.next;
    // return node;
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    // if (!this.head) return;
    // this.head = this.head.next;
    this.removeAt(0);
  }

  removeLast() {
    // if (!this.head) return;
    // if (!this.head.next) {
    //   this.head = null;
    //   return;
    // }

    // let node = this.head;
    // while (node.next.next) {
    //   node = node.next;
    // }
    // node.next = null;
    // return;
    this.removeAt(this.size() - 1);
  }

  insertLast(record) {
    // const node = new Node(record);
    // if (!this.head) {
    //   this.head = node;
    //   return;
    // }
    // let temp = this.head;

    // while (temp.next) {
    //   temp = temp.next;
    // }

    // temp.next = node;
    // return;
    this.insertAt(record, this.size());
  }

  getAt(index) {
    if (!this.head) return null;

    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) return null;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let counter = 0;
    let node = this.head;
    while (node.next) {
      if (counter === index - 1) {
        node.next = node.next.next;
        return;
      }
      counter++;
      node = node.next;
    }

    return null;
  }

  insertAt(data, index) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    let counter = 0;
    let temp = this.head;

    while (temp.next) {
      if (counter === index - 1) {
        node.next = temp.next;
        temp.next = node;
        return;
      }
      counter++;
      temp = temp.next;
    }

    temp.next = node;
    return;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
