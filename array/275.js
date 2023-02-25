var hIndex = function (citations) {
    let z = 0, y = citations.length - 1
    while (z <= y) {
        let temp = parseInt((y + z) / 2)
        if (citations[temp] < citations.length - temp) {
            z = temp + 1
        } else {
            y = temp - 1
        }
    }
    return citations.length - z
};

console.log(hIndex([0, 1, 3, 5, 6]));