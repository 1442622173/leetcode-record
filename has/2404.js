var mostFrequentEven = function (nums) {
    let map = {}
    let sum = -1
    let res = nums.reduce((res, item) => {
        if (item % 2 == 0) {
            map[item] ? map[item]++ : map[item] = 1
            if (sum < map[item]) {
                sum = map[item]
                return item
            } else if (sum == map[item] && item < res) {
                return item
            }
        }
        return res
    }, -1)
    return res
};

console.log(mostFrequentEven([8154, 9139, 8194, 3346, 5450, 9190, 133, 8239, 4606, 8671, 8412, 6290]));