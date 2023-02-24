var minimumOperations = function (nums) {
    let map = {}
    let res = 0
    nums.forEach(i => {
        if (!map[i] && i != 0) {
            map[i] = 1
            res++
        }
    })
    return res
};

console.log(minimumOperations([1, 5, 0, 3, 5]));