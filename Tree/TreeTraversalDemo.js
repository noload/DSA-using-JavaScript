class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class TreeStructure {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  insert(currentNode, newValue) {
    if (currentNode === null) {
      currentNode = new Node(newValue);
    } else if (newValue < currentNode.value) {
      currentNode.leftChild = this.insert(currentNode.leftChild, newValue);
    } else {
      currentNode.rightChild = this.insert(currentNode.rightChild, newValue);
    }
    return currentNode;
  }

  preOrderTraversal(currentNode) {
    if (currentNode !== null) {
      console.log(currentNode.value);
      this.preOrderTraversal(currentNode.leftChild);
      this.preOrderTraversal(currentNode.rightChild);
    }
  }
  inOrderTraversal(currentNode) {
    if (currentNode !== null) {
      console.log(currentNode.value);
      this.preOrderTraversal(currentNode.leftChild);
      this.preOrderTraversal(currentNode.rightChild);
    }
  }
  postOrderTraversal() {
    if (currentNode !== null) {
      this.preOrderTraversal(currentNode.leftChild);
      this.preOrderTraversal(currentNode.rightChild);
      console.log(currentNode.value);
    }
  }

  insertBST(newValue) {
    if (this.root == null) {
      this.root = new Node(newValue);
      return;
    }
    this.insert(this.root, newValue);
  }
}

var bst = new TreeStructure(50);
bst.insertBST(30);
bst.insertBST(35);
bst.preOrderTraversal(bst.root);
