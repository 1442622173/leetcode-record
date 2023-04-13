var minimumDeletions = function (s) {
    let suma = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'a') suma++
    }
    let res = s.length, sumb = 0, lea = 0
    for (let i = 0; i <= s.length; i++) {
        res = Math.min(res, sumb + suma - lea)
        if (s[i] == 'b') sumb++
        else lea++
    }
    return res
};

console.log(minimumDeletions("aababbab"));