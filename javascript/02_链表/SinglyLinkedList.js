/**
 * @author Perlou(perloukevin@gmail.com)
 * 实现单链表
 *
 * 1) 单链表反转
 * 2) 链表中环的检测
 * 3) 两个有序的链表合并
 * 4) 删除链表倒数第n个结点
 * 5) 求链表的中间结点
 */

class Node {
    constructor(element) {
        // 值
        this.element = element
        // next 指针
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head')
    }

    /**
     * 根据 value 查找节点
     */
    findByValue(item) {
        let cur = this.head.next
        while(cur !== null && cur.element !== item) {
            cur = cur.next
        }
        return cur === null ? -1 : cur
    }

    /**
     * 根据 index 查找节点，下标从 0 开始
     */
    findByIndex(index) {
        let cur = this.head.next
        let position = 0
        while(cur !== null && position !== index) {
            position++
        }
        return cur === null ? -1 : cur
    }

    /**
     * 查找前一个
     */
    findPrev(item) {
        let cur = this.head
        while(cur.next !== null && cur.next.element !== item) {
            cur = cur.next
        }
        if (cur.next === null) {
            return -1
        }
        return cur
    }

    /**
     * 向链表末尾追加节点
     * 时间复杂度 O(n)
     * 空间复杂度 O(1)
     */
    append(item) {
        let newNode = new Node(item)
        let cur = this.head
        while(cur.next) {
            cur = cur.next
        }
        cur.next = newNode
    }

    /**
     * 指定元素向后插入
     */
    insert(newItem, item) {
        let curNode = this.findByValue(item)
        if (curNode === -1) {
            throw Error('未找到插入位置')
        }
        let newNode = new Node(newItem)
        // 指针改变
        newNode.next = curNode.next
        curNode.next = newNode
    }

    /**
     * 删除节点
     */
    remove(item) {
        let prev = this.findPrev(item)
        if (prev === -1) {
            throw Error('未找到节点')
        }
        prev.next = prev.next.next
    }

    /**
     * 显示所有节点
     */
    display() {
        // 忽略头指针的值
        let cur = this.head.next
        while(cur !== null) {
            console.log(cur.element)
            cur = cur.next
        }
    }
}

// test

const list = new LinkedList()

console.log('-------------append item------------')
list.append('jason')
list.append('chen')
list.append('curry')
list.append('perlou')
list.display() // jason ->  chen -> curry -> perlou

console.log('-------------insert item------------')
list.insert('qian', 'chen') // 首元素后插入
list.insert('zhou', 'perlou') // 尾元素后插入
list.display()

console.log('-------------remove item------------')
list.remove('chen')
list.remove('curry')
list.display()

console.log('-------------find by item------------')
console.log(list.findByValue('jason'))

console.log('-------------find by index------------')
console.log(list.findByIndex(2))
