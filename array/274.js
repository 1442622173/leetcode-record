var hIndex = function (citations) {
    citations.sort((a, b) => b - a)
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] < i + 1) return i
        if (i == citations.length - 1 && citations[i] >= i + 1) return i + 1
    }
};

console.log(hIndex([3, 0, 6, 1, 5]));