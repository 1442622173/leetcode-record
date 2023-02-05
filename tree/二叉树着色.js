const { TreeNode, buildTree } = require("./buildTree")
var btreeGameWinningMove = function (root, n, x) {
    function nodesum(root) {
        if (!root) return 0
        return 1 + nodesum(root.left) + nodesum(root.right)
    }
    let node
    function findnode(root, x) {
        if (!root) return
        if (root.val == x) {
            node = root
            return
        }
        findnode(root.left, x)
        findnode(root.right, x)
    }
    findnode(root, x)
    let sumr = nodesum(node.right)
    let suml = nodesum(node.left)
    let other = n - 1 - sumr - suml
    let max = Math.max(suml, sumr, other)
    return max > n - max
};

let tree = buildTree([5, 9, 6, null, null, 7, null, null, 8, 1, 4, null, null, null, 3, null, 2])

console.log(btreeGameWinningMove(tree, 9, 8));