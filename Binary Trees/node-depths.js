/*

Node Depths

  The distance between a node in a Binary Tree and the tree's root is called the
  node's depth.

  Write a function that takes in a Binary Tree and returns the sum of its nodes'
  depths.

  Each BinaryTree node has an integer value, a
  left child node, and a right child node. Children
  nodes can either be BinaryTree nodes themselves or
  None / null.

Sample Input
tree =    1
       /     \
      2       3
    /   \   /   \
   4     5 6     7
 /   \
8     9

Sample Output
16
// The depth of the node with value 2 is 1.
// The depth of the node with value 3 is 1.
// The depth of the node with value 4 is 2.
// The depth of the node with value 5 is 2.
// Etc..
// Summing all of these depths yields 16.


 */

//O(n)time, O(h)space. N is the number of nodes and h is the height of the tree.
function nodeDepths(root, depth = 0) {
    // Write your code here.
    if (root == null) {
        return 0
    } else {
        return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
    }

}

// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

test = {
    "tree": {
        "nodes": [
            {"id": "1", "left": "2", "right": "3", "value": 1},
            {"id": "2", "left": "4", "right": "5", "value": 2},
            {"id": "3", "left": "6", "right": "7", "value": 3},
            {"id": "4", "left": "8", "right": "9", "value": 4},
            {"id": "5", "left": null, "right": null, "value": 5},
            {"id": "6", "left": null, "right": null, "value": 6},
            {"id": "7", "left": null, "right": null, "value": 7},
            {"id": "8", "left": null, "right": null, "value": 8},
            {"id": "9", "left": null, "right": null, "value": 9}
        ],
        "root": "1"
    }
}
console.log(nodeDepths(test['tree']['nodes']))