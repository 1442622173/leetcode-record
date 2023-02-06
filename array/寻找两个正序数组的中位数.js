function findMedianSortedArrays(nums1, nums2) {
    let long, short
    if (nums1.length < nums2.length) {
        long = nums2
        short = nums1
    } else {
        long = nums1
        short = nums2
    }
    let start = 0
    let end = long.length - 1
    if (short[0] > long[long.length - 1]) {
        long = long.concat(short)
        short = []
    }
    if (long[0] > short[short.length - 1]) {
        long = short.concat(long)
        short = []
    }
    for (let i = 0; i < short.length; i++) {
        let temp = short[i]
        if (temp >= long[long.length - 1]) {
            long.push(temp)
            continue
        }
        if (temp <= long[0]) {
            long.unshift(temp)
            start++
            end = long[long.length - 1]
            continue
        }
        //二分，寻找在long中的位置
        while (end - start > 1) {
            if (long[parseInt((end + start) / 2)] > temp) {
                end = parseInt((end + start) / 2)
            } else if (long[parseInt((end + start) / 2)] < temp) {
                start = parseInt((end + start) / 2)
            } else {
                end = parseInt((end + start) / 2)
                start = end
            }
        }
        long.splice(start + 1, 0, temp)
        end = long[long.length - 1]
    }
    let len = parseInt(long.length / 2)
    if (long.length % 2 == 0) {
        return (long[len] + long[len - 1]) / 2
    }
    return long[len]
};

console.log(findMedianSortedArrays([1, 3], [2, 4]));