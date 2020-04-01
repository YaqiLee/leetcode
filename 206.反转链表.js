/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let current = head, prev = null;

    while (current) {
        
        let t = current.next;

        current.next = prev;
        prev = current;

        current = t;
    }

    console.log(prev);
    

};
// @lc code=end

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let p = new ListNode(0);
let head = p;

for (let i = 1; i < 6; i++) {
    head.next = new ListNode(i);
    head = head.next;
}

reverseList(p.next)