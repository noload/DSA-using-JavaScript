class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode
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
    return
  }

  size(){
    let count = 0
    let cur = this.head
    while (cur != null) {
        count++;
        cur = cur.next;
    }
    return count;
  }
  addAt(index,value){
    const node  = new Node(value)
    if (index < 0 || index > this.size()) {
        throw new Error("Index out of bound")
        
    }

    if (index == 0) {
       this.addFirst(value) 
       return;
    }

    let cur =  this.head;
    for(let i = 1 ; i < index - 1;i++){
        cur=cur.next;
    }
    node.next = cur.next;
    cur.next = node;
    return;
  }
}               

const list =  new LinkedList();

list.addLast(20)
list.addLast(30)
list.addLast(40)
list.addLast(60)
list.addLast(80)
list.addAt(3, 35)

let cur = list.head
while (cur != null) {
    console.log(cur.value);
    cur = cur.next;
}
console.log(list.size())

