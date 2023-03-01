var gameOfLife = function (board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let liv = 0
            for (let q = i - 1; q <= i + 1; q++) {
                if (!board[q]) continue
                for (let w = j - 1; w <= j + 1; w++) {
                    if (q == i && w == j || !board[q][w]) continue
                    if (board[q][w] % 2 == 1) liv++
                }
            }
            if (board[i][j] == 0 && liv == 3) {
                board[i][j] = 2
            }
            else if (board[i][j] == 1) {
                if (liv < 2 || liv > 3) board[i][j] = 3
            }
        }
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] == 3) board[i][j] = 0
            if (board[i][j] == 2) board[i][j] = 1
        }
    }
    return board
};

console.log(gameOfLife([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]));