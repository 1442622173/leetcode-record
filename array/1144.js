var movesToMakeZigzag = function (nums) {
    let j = 0, o = 0
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]
        let pre = nums[i - 1] ? nums[i - 1] : 1001
        let end = nums[i + 1] ? nums[i + 1] : 1001
        let min = Math.min(pre, end)
        if (i % 2 == 0) {
            if (n < min) continue
            o += (n - min + 1)
        } else {
            if (n < min) continue
            j += (n - min + 1)
        }
    }
    return Math.min(j, o)
};

console.log(movesToMakeZigzag([9, 6, 1, 6, 2]));