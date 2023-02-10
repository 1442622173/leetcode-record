function isPalindrome(x) {
    if (x < 0) {
        return false
    }
    x = x.toString()
    len = parseInt(x.length / 2)
    for (let i = 0; i < len; i++) {
        if (x[i] != x[x.length - 1 - i]) {
            return false
        }
    }
    return true
};

console.log(isPalindrome(121));