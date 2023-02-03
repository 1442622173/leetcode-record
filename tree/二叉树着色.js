function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var buildTree = function (nums) {
    var root = new TreeNode(nums[0]);
    var queue = [];
    queue.push(root);
    var cur;
    var lineNodeNum = 2;
    var startIndex = 1;
    var restLength = nums.length - 1;
    while (restLength > 0) {
        for (var i = startIndex; i < startIndex + lineNodeNum; i = i + 2) {
            if (i == nums.length) return root;
            cur = queue.shift();
            if (nums[i] != null) {
                cur.left = new TreeNode(nums[i]);
                queue.push(cur.left);
            }

            if (i + 1 == nums.length) return root;
            if (nums[i + 1] != null) {
                cur.right = new TreeNode(nums[i + 1]);
                queue.push(cur.right);
            }
        }
        startIndex += lineNodeNum;
        restLength -= lineNodeNum;
        lineNodeNum = queue.length * 2;
    }
    return root;
}

let tree = buildTree([5, 9, 6, null, null, 7, null, null, 8, 1, 4, null, null, null, 3, null, 2])

var btreeGameWinningMove = function (root, n, x) {
    let xNode;
    const find = (node, x) => {
        if (xNode || !node) {
            return;
        }
        if (node.val === x) {
            xNode = node;
            return;
        }
        find(node.left, x);
        find(node.right, x);
    }

    const getSubtreeSize = (node) => {
        if (!node) {
            return 0;
        }
        return 1 + getSubtreeSize(node.left) + getSubtreeSize(node.right);
    };
    find(root, x);
    const leftSize = getSubtreeSize(xNode.left);
    if (leftSize >= Math.floor((n + 1) / 2)) {
        return true;
    }
    const rightSize = getSubtreeSize(xNode.right);
    if (rightSize >= Math.floor((n + 1) / 2)) {
        return true;
    }
    const remain = n - 1 - leftSize - rightSize;
    return remain >= Math.floor((n + 1) / 2);
}
console.log(btreeGameWinningMove(tree, 9, 8));
//ÎÒµÄ´úÂë
var btreeGameWinningMove = function (root, n, x) {
    function nodesum(root) {
        if (!root) return 0
        return 1 + nodesum(root.left) + nodesum(root.right)
    }
    function findnode(root, x) {
        if (!root) return
        if (root.val == x) return root
        findnode(root.left, x)
        findnode(root.right, x)
    }
    let node = findnode(root, x)
    let sumr = nodesum(node.right)
    let suml = nodesum(node.left)
    let other = n - 1 - sumr - suml
    let max = Math.max
    return max > n - max
};