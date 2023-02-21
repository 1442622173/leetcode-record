var largeGroupPositions = function (s) {
    let temp = s[0], sum = 0, l = 0, res = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == temp) {
            sum++
            if (i == s.length - 1 && sum > 2) {
                res.push([l, l + sum - 1])
            }
            continue
        } else {
            temp = s[i]
            if (sum > 2) res.push([l, l + sum - 1])
            sum = 1
            l = i
        }
    }
    return res
};

console.log(largeGroupPositions("abbxxxxzzy"));