class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  //add node to end of the linked list
  push(value) {
    const newNode = Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //remove node from end  of linked list
  pop() {
    if (!this.head) return undefined;

    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(value) {
    const newNode = Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    temp.next = null;
    if (this.length == 0) {
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    // if (!this.head) {
    //   return undefined;
    // }
    // let i = 0;
    // let temp = this.head;
    // while (temp.next) {
    //   if (i == index) {
    //     return temp;
    //   }
    //   i++;
    //   temp = temp.next;
    // }

    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    // if (index < 0 || index >= this.length) return undefined;
    // let temp = this.head;
    // for (let i = 0; i < index; i++) {
    //   temp = temp.next;
    // }
    // temp.value = value;
    // return this;

    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    const newNode = Node(value);
    if (index < 0 || index > this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.unshift(value);
    }
    if (index == this.length) {
      return this.push(value);
    }
    let temp = this.head;
    for (let i = 0; i < index - 1; i++) {
      temp = temp.next;
    }
    newNode.next = temp.next;
    temp.next = newNode;
  }
}
list = new LinkedList(10);
