function myAtoi(s) {
    s = s.trim()
    if (s.length == 0) return 0
    let end = '0'
    if (s[0].charCodeAt() > 47 && s[0].charCodeAt() < 58) {
        end += s[0]
    } else if (s[0] == '-' || s[0] == '+') {
        end = s[0] + end
    } else { return 0 }
    for (let i = 1; i < s.length; i++) {
        if (s[i].charCodeAt() > 47 && s[i].charCodeAt() < 58) {
            end += s[i]
        } else { break }
    }
    end = Number(end)
    if (end > (2 ** 31 - 1)) return 2 ** 31 - 1
    if (end < -(2 ** 31)) return -(2 ** 31)
    return end
};

console.log(myAtoi("4193 with words"));