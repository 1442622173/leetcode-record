function lengthOfLongestSubstring(s) {
    let len = 0
    let zhen = 0
    let temp = new Set()
    for (let i = 0; i < s.length; i++) {
        if (i > 0) {
            temp.delete(s[i - 1])
        }
        while (zhen < s.length && !temp.has(s[zhen])) {
            temp.add(s[zhen])
            zhen++
        }
        len = Math.max(len, temp.size)
    }
    return len
};

console.log(lengthOfLongestSubstring("pwwkew"));