const { ListNode, buildListNode } = require('./buildListNode')
function addTwoNumbers(l1, l2) {
    let result = new ListNode('0')
    let addone = 0
    let head = result
    while (l1 || l2 || addone) {
        let l1val = l1 !== null ? l1.val : 0
        let l2val = l2 !== null ? l2.val : 0
        let sum = l1val + l2val + addone
        addone = sum > 9 ? 1 : 0
        result.next = new ListNode(sum % 10)
        result = result.next
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    return head.next
};

let l1 = buildListNode([2, 4, 3])
let l2 = buildListNode([5, 6, 4])

console.log(addTwoNumbers(l1,l2));