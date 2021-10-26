/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues(total = 0, condition = "true===true") {
    const toVisit = [this];
    while (toVisit.length) {
      let current = toVisit.shift();
      if (current.root) {
        for (let node of current.root.children) {
          if (eval(condition)) {
            node.val;
            total += node.val;
            toVisit.push(node);
          }
        }
      }
    }
    return this.root === null ? 0 : total + this.root.val;
  }

  sumValuesRecursively(total = 0, toVisit = [this]) {
    if (toVisit.length) {
      let current = toVisit.shift();
      if (current.root) {
        for (let node of current.root.children) {
          total += node.val;
          this.sumValuesRecursively(total, toVisit);
        }
      }
      return total;
    }
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    return this.sumValues(0, "node.val%2===0");
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    const condition = `node.val>${lowerBound}`;
    return this.sumValues(0, condition);
  }
}
emptyTree = new Tree();

// build small tree
let nSmall = new TreeNode(1);
let nSmall2 = new TreeNode(2);
nSmall.children.push(nSmall2);
smallTree = new Tree(nSmall);

// build large tree
let n = new TreeNode(1);
let n2 = new TreeNode(2);
let n3 = new TreeNode(3);
let n4 = new TreeNode(4);
let n5 = new TreeNode(5);
let n6 = new TreeNode(6);
let n7 = new TreeNode(7);
let n8 = new TreeNode(8);

n.children = [n2, n3, n4];

n4.children.push(n5, n6);
n6.children.push(n7);
n7.children.push(n8);

largeTree = new Tree(n);
let amy = new TreeNode(1, [new TreeNode(2)]);
let myTree = new Tree(amy);
// largeTree.sumValues()
// myTree.sumValues();
module.exports = { Tree, TreeNode };
largeTree.numGreater(0);
