var getHint = function (secret, guess) {
    let len = secret.length, bulls = 0, cows = 0, map = {}
    for (let i = 0; i < len; i++) {
        let se = secret[i], gu = guess[i]
        if (se == gu) {
            bulls++
            continue
        }
        if (!map[se]) map[se] = 1
        else {
            if (map[se] < 0) cows++
            map[se]++
        }
        if (!map[gu]) map[gu] = -1
        else {
            if (map[gu] > 0) cows++
            map[gu]--
        }
    }
    return `${bulls}A${cows}B`
};

console.log(getHint("1123", "0111"));