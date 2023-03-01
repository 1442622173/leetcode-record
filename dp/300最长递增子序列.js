var lengthOfLIS = function (nums) {
    let res = 1
    let dp = new Array(nums.length).fill(1)
    for (let i = 1; i < nums.length; i++) {
        let end = nums[i]
        for (let j = 0; j < i; j++) {
            let pre = nums[j]
            if (end > pre) {
                dp[i] = dp[j] + 1 > dp[i] ? dp[j] + 1 : dp[i]
                res = Math.max(dp[i], res)
            }
        }
    }
    return res
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));