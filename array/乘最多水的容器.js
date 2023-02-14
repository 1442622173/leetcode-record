function maxArea(height) {
    let z = 0
    let y = height.length - 1
    let end = y * Math.min(height[z], height[y])
    while (z < y) {
        let temp = (y - z) * Math.min(height[z], height[y])
        if (temp > end) end = temp
        if (height[z] > height[y]) {
            y--
        } else {
            z++
        }
    }
    return end
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));