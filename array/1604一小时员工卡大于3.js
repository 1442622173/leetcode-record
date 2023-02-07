function lertNames(keyName, keyTime) {
    let res = {}
    let list = []
    keyTime = keyTime.map(i => {
        return i.substr(0, 2) * 60 + i.substr(3, 2) * 1
    })
    for (let i = 0; i < keyName.length; i++) {
        let temp = keyName[i]
        if (res[temp]) res[temp].push(keyTime[i])
        else res[temp] = [keyTime[i]]
    }
    for (let item in res) {
        if (res[item].length < 3) continue
        let temp = res[item].sort((a, b) => a - b)
        for (let i = 2; i < temp.length; i++) {
            let a = temp[i] - temp[i - 2]
            if (Math.abs(a) <= 60) {
                list.push(item)
                break
            }
        }
    }
    return list.sort()
};

console.log(lertNames(["daniel", "daniel", "daniel", "luis", "luis", "luis", "luis"], ["10:00", "10:40", "11:00", "09:00", "11:00", "13:00", "15:00"]));