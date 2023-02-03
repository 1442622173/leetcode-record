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
//以下为算法
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