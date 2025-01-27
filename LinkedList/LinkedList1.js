class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.position = ["first","last"]
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  addLast(value) {
    const node = new Node(value);
    if (this.head == null) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
    return;
  }

  print() {
    let cur = this.head;
    while (cur != null) {
      process.stdout.write(`${cur.value} --> `)
      cur = cur.next;
    }
    process.stdout.write(`null \n`)

  }
  size() {
    let count = 0;
    let cur = this.head;
    while (cur != null) {
      count++;
      cur = cur.next;
    }
    return count;
  }
  addAt(index, value) {
    const node = new Node(value);
    if (index < 0 || index > this.size()) {
      throw new Error("Index out of bound");
    }

    if (index == 0) {
      this.addFirst(value);
      return;
    }

    let cur = this.head;
    for (let i = 1; i < index - 1; i++) {
      cur = cur.next;
    }
    node.next = cur.next;
    cur.next = node;
    return;
  }

  removeLast(){
    if (!this.head) {
      throw new Error("not valid operation")
    }
    if (this.size() === 1) {
      this.head = null
    }
    let cur = this.head;
    while(cur.next.next){
      cur =  cur.next;
    }
    cur.next = null;
  }
  
  addMultiple(values,position,index =  0){
    if (position == "first") {
      for(let val of values){
        this.addFirst(val)
      }
    }else if(position == "last"){
      for(let val of values){
        this.addLast(val)
      }
    }else if(position == "index"){
      if (index >  this.size()) {
        return -1;
      }
      for(let i = 0 ; i < values.length;i++){
        this.addAt(index + 1,values[i])
      }
    }
  }

  removeFirst(){
    if (!this.head) {
      throw new Error("not valid operation")
    }
    if (this.size() === 1) {
      this.head = null
    }
    this.head = this.head.next

  }

}

const list = new LinkedList();

list.addMultiple([10,20,30,40],"last")

list.print()
list.removeFirst()
list.print()