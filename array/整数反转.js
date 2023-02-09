function reverse(x) {
    let a = []
    while (x != 0) {
        a.push(x % 10)
        x = parseInt(x / 10)
    }
    for (let i = 0; i < a.length; i++) {
        x = x + a[i] * 10 ** (a.length - 1 - i)
    }
    if (x < ((-2) ** 31) || x > 2 ** 31 - 1) return 0
    return x
};

console.log(reverse(-1234));