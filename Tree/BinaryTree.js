/**
 * Tree Datastructure
 * 
 * 
 * Types of Binary Tree
 * 1 Full Binary Tree 
 *  --> Every Node either 2 or 0 child no node has 1 child
 * 
 * 2 Perfect Binary Treee
 *  --> In perfect binary tree all internal node have two child and all leaf node are on same level
 *  --> A perfect binary tree of height h has (2^(h+1)) - 1 nodes.
 * 
 * 3 Complete Binary Tree
 *  --> All level are completely filled except last level
 *  --> Nodes in the last level are as left as possible.
 * 
 * 4 Balanced Binary Tree
 *  --> The difference in height between the left and right subtrees of any node is at most 1.
 * 
 * 5 Degenerate (Skewed) Tree
 *  --> Each parent node has only one child.
 * 
 * 
 * 
 */


class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }

    insert(root,value){
        if(this.root) return new Node(value);

        if (value < root.value) {
            this.insert(root.left,value)
        }else{
            this.insert(root.right,value)
        }
        return root;
    }
}


const root = BinaryTree();s
root.insert(50);
root.insert(20)