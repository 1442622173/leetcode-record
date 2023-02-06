const { TreeNode, buildTree } = require("./buildTree")

function evaluateTree(root) {
    if (root.val < 2) return root.val
    else if (root.val == 2) {
        return evaluateTree(root.left) || evaluateTree(root.right)
    }
    else if (root.val == 3) {
        return evaluateTree(root.left) && evaluateTree(root.right)
    }
};

let a = buildTree([2, 1, 3, null, null, 0, 1])

console.log(evaluateTree(a));