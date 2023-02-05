function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function buildListNode(arr) {
    let res = new ListNode
    let lh = res
    for (let i = 0; i < arr.length; i++) {
        res.next = new ListNode(arr[i])
        res = res.next
    }
    return lh.next
}
module.exports = {ListNode,buildListNode}
