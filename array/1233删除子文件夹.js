function removeSubfolders(folder) {
    folder.sort()
    let res = [folder[0]]
    for (let i = 1; i < folder.length; i++) {
        let temp = res[res.length - 1]
        let n = temp.length
        if (folder[i].substr(0, n) == temp && folder[i][n] == '/') continue
        else res.push(folder[i])
    }
    return res
};

console.log(removeSubfolders(["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"]));