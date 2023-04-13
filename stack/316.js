var removeDuplicateLetters = function (s) {
    let map = { [s[0]]: 1 }, stack = [s[0]]
    for (let i = 1; i < s.length; i++) {
        if (map[s[i]]) continue
        let prerank = stack.at(-1).charCodeAt(0)
        let nowrank = s.charCodeAt(i)
        if (nowrank > prerank) {
            stack.push(s[i])
            map[s[i]] = 1
            continue
        }
        while (nowrank < stack.at(-1).charCodeAt(0)) {
            let flag = 0
            for (let j = i + 1; j < s.length; j++) {
                if (s[j] == stack.at(-1)) {
                    delete map[stack.pop()]
                    break
                }
                if (j == s.length - 1) flag = 1
            }
            if (stack.length == 0 || flag || i >= s.length - 1) break
        }
        stack.push(s[i])
        map[s[i]] = 1
    }
    return stack.join('')
};

console.log(removeDuplicateLetters("cbacdcbc"));