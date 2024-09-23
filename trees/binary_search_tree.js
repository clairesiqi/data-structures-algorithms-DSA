class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let curr = this.root;
      while (true) {
        if (value === curr.value) {
          return this;
        } else if (value < curr.value) {
          if (curr.left === null) {
            curr.left = newNode;
            return this;
          } else {
            curr = curr.left;
          }
        } else if (value > curr.value) {
          if (curr.right === null) {
            curr.right = newNode;
            return this;
          } else {
            curr = curr.right;
          }
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    } else {
      let curr = this.root;
      while (curr) {
        if (value === curr.value) {
          return curr;
        } else if (value < curr.value) {
          curr = curr.left;
        } else if (value > curr.value) {
          curr = curr.right;
        }
      }
      return false;
    }
  }

  remove(value) {}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
// tree.insert(1);
console.log(tree);
tree.remove(170);
// JSON.stringify(traverse(tree.root));
console.log(tree.lookup(21));
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
