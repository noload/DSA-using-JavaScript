class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.isEmpty()) {
      node.next = this.head;
    }
    this.head = node;
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      while (curr) {
        console.log(curr.value);
        curr = curr.next;
      }
    }
  }

  append(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const newNode = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      newNode.next = prev.next;
      prev.next = newNode;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = prev.next.next;
    }
    this.size--;
    return removedNode;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      console.log("Linked list is empty");
      return null;
    }
    if (value === this.head.value) {
      this.head = this.head.next;
      this.size--;
      console.log("removed the node");
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        prev.next = prev.next.next;
        this.size--;
      }
      console.log("Node not present with given value");
    }
  }
}
const list = new LinkedList();
// console.log(list.isEmpty());
// console.log(list.getSize());
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.print();
console.log("##############");
// list.insert(25, 2);
// list.removeFrom(2);
list.removeValue(45);
list.print();
