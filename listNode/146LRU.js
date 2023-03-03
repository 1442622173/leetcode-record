class linkenode {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.pre = null
        this.next = null
    }
}
var LRUCache = function (capacity) {
    this.max = capacity
    this.length = 0
    this.map = {}
    this.head = new linkenode()
    this.end = new linkenode()
    this.head.next = this.end
    this.end.pre = this.head
    this.addnode = function (node) {
        node.pre = this.head
        node.next = this.head.next
        this.head.next.pre = node
        this.head.next = node
        this.map[node.key] = node
    }
    this.delenode = function (node) {
        let pre = node.pre
        let next = node.next
        pre.next = next
        next.pre = pre
        delete this.map[node.key]
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let temp = this.map[key]
    if (!temp) return -1
    this.delenode(temp)
    this.addnode(new linkenode(temp.key, temp.value))
    return temp.value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let node = new linkenode(key, value)
    if (this.map[key]) {
        this.delenode(this.map[key])
        this.addnode(node)
        return
    }
    if (this.length == this.max) {
        this.delenode(this.end.pre)
        this.addnode(node)
    } else {
        this.length++
        this.addnode(node)
    }
};