var largest1BorderedSquare = function (grid) {
    let zon = grid.length
    let len = grid[0].length
    for (let i = Math.min(zon, len); i > 0; i--) {
        let res = 1
        for (let j = 0; j < zon - i + 1; j++) {//纵
            for (let t = 0; t < len - i + 1; t++) {//横
                for (let y = 0; y < 0 + i; y++) {
                    res = 1
                    if (grid[j][t + y] == 0 || grid[j + i - 1][t + y] == 0 || grid[j + y][t] == 0 || grid[j + y][t + i - 1] == 0) {
                        res = 0
                        break
                    }
                }
                if (res == 1) return i * i
            }
        }
    }
    return 0
};

console.log(largest1BorderedSquare([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));