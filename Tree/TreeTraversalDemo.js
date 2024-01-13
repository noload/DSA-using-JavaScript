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
      this.preOrderTraversal(currentNode.leftChild);
      console.log(currentNode.value);
      this.preOrderTraversal(currentNode.rightChild);
    }
  }
  postOrderTraversal(currentNode) {
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

  // deleteNode(root, value) {
  //   if (root === null) {
  //     return null;
  //   }
  //   if (value < root.value) {
  //     root.leftChild =this.deleteNode(root)
  //   }
  //   else if(value > root.value){
  //     root.rightChild = this.deleteNode()
  //   }
  // }

  deletenode(root, value) {
    if (root === null) {
      return null;
    }
    if (value < root.value) {
      root.leftChild = this.deletenode(root.leftChild, value);
    } else if (value > root.value) {
      root.rightChild = this.deletenode(root.rightChild, value);
    } else {
      if (!root.leftChild && !root.rightChild) {
        return null;
      }
      if (!root.leftChild) {
        return root.rightChild;
      } else if (!root.rightChild) {
        return root.leftChild;
      }
      root.value = this.min(root.rightChild);
      root.rightChild = this.deletenode(root.rightChild, root.value);
    }
    return root;
  }
  deletebst(value) {
    this.root = this.deletenode(this.root, value);
  }
}

var bst = new TreeStructure(50);
bst.insertBST(30);
bst.insertBST(35);
bst.postOrderTraversal(bst.root);
