var removeDuplicates = function (nums) {
    let temp = 10001, sum = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != temp) {
            temp = nums[i]
            sum = 1
            continue
        } else if (nums[i] == temp && sum == 1) {
            sum++
        } else if (nums[i] == temp && sum == 2) {
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));