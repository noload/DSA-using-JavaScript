class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }

  //insert the node in bst

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right == null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, val) {
    if (!root) {
      return false;
    } else {
      if (root.value === val) {
        return true;
      } else if (val < root.value) {
        return this.search(root.left, val);
      } else {
        return this.search(root.right, val);
      }
    }
  }
}

const bst = new BinarySearchTree();
console.log("Is tree empty ?", bst.isEmpty());
bst.insert(10);
bst.insert(20);
bst.insert(30);
console.log(bst.search(bst.root, 30));
console.log(bst.search(bst.root, 20));
console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 40));
