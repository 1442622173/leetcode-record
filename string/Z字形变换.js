function convert(s, numRows) {
    if (numRows == 1) return s
    let a = ''
    let z = 2 * numRows - 2
    let y = 0
    for (let i = 0; i < numRows; i++) {
        let temp = i
        while (temp <= s.length) {
            if (z != 0 && s[temp]) {
                a = a + s[temp]
            }
            temp += z
            if (y != 0 && s[temp]) {
                a = a + s[temp]
            }
            temp += y
        }
        z -= 2
        y += 2
    }
    return a
};

console.log(convert("PAYPALISHIRING", 4));