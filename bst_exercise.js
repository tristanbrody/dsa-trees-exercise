class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let toVisit = [this.root];
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    while (toVisit.length) {
      const currentNode = toVisit.shift();
      if (val < currentNode.val) {
        if (currentNode.left !== null) {
          toVisit.unshift(currentNode.left);
        } else {
          currentNode.left = new Node(val);
          return this;
        }
      } else {
        if (currentNode.right !== null) {
          toVisit.unshift(currentNode.right);
        } else {
          currentNode.right = new Node(val);
          return this;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    const add = (node, val) => {
      if (val < node.val) {
        if (node.left === null) {
          node.left = new Node(val);
          return this;
        } else {
          add(node.left, val);
        }
      }

      if (val > node.val) {
        if (node.right === null) {
          node.right = new Node(val);
          return this;
        } else {
          add(node.right, val);
        }
      }
    };

    return add(this.root, val);
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    const toVisit = [this.root];

    while (toVisit.length) {
      let node = toVisit.shift();
      if (node === null) return undefined;
      if (node.val === val) return node;

      if (val < node.val) {
        toVisit.unshift(node.left);
      }

      if (val > node.val) {
        toVisit.unshift(node.right);
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    const findHelper = node => {
      if (node === null) return undefined;

      if (node.val === val) return node;

      if (val < node.val) {
        if (node.left !== null) {
          return findHelper(node.left);
        }
      }

      if (val > node.val) {
        if (node.right !== null) {
          return findHelper(node.right);
        }
      }
    };
    return findHelper(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root) {
    const visited = [];
    const traverse = node => {
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(node);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root) {
    const visited = [];
    const traverse = node => {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    };
    traverse(node);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root) {
    const visited = [];
    const traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    };
    traverse(node);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs(node = this.root, toVisit = [], data = []) {
    toVisit.push(node);

    while (toVisit.length) {
      node = toVisit.shift();
      data.push(node.val);
      if (node.left) {
        toVisit.push(node.left);
      }
      if (node.right) {
        toVisit.push(node.right);
      }
    }
    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15).insert(20);

var binarySearchTree = new BinarySearchTree();

var binarySearchTree = new BinarySearchTree();

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insertRecursively(15)
  .insertRecursively(20)
  .insertRecursively(10);

binarySearchTree.insert(15).insert(20).insert(10).insert(12);
var foundNode = binarySearchTree.findRecursively(20);

binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);

binarySearchTree.dfsPreOrder();

let binarySearchTree2 = new BinarySearchTree();
binarySearchTree2
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);

binarySearchTree.bfs();
