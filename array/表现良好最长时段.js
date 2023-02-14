function longestWPI(hours) {
    const n = hours.length;
    const s = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        s[i] = s[i - 1] + (hours[i - 1] > 8 ? 1 : -1);
    }
    let res = 0
    for (let i = n; i > 0; i--) {
        let r = s[i]
        for (let j = 0; j < n; j++) {
            let l = s[j]
            if (r > l) res = Math.max(res, i - j)
        }
    }
    return res
};

console.log(longestWPI([9, 9, 6, 0, 6, 6, 9]));