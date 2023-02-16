var numberOfPairs = function (nums) {
    let len = nums.length
    let res = {}
    for (let i = 0; i < len; i++) {
        if (res[nums[i]]) {
            res[nums[i]]++
        } else res[nums[i]] = 1
    }
    let s = 0
    for (let i in res) {
        s += parseInt(res[i] / 2)
    }
    return [s, len - 2 * s]
};

console.log(numberOfPairs([1, 3, 4, 2, 1, 6, 2]));