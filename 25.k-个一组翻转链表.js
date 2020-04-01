/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
//// 未完成
var reverseKGroup = function (head, k) {
    let curr1 = head, i = 0;
    let reverse = new ListNode(0), rHead = reverse;
    let prev1 = null;

    while (curr1) {
        let t = curr1.next;

        curr1.next = prev1;
        prev1 = curr1;

        console.log(prev1);
        
        if (i++ == k - 1) {

            mergeNodes(rHead, prev1);

            i = 0;
            prev1 = null;
        }

        curr1 = t;
    }

    mergeNodes(reverse, reverseNodes(prev1));

    return reverse.next;
};
var reverseNodes = function(nodes) {

    let head = nodes, prev = null;

    while(head) {
        let t = head.next;

        head.next = prev;
        prev = head;

        head = t;
    }

    return prev;
}
var mergeNodes = function (rHead, prev) {

    do {

        if (rHead.next == null) {
            rHead.next = prev
            rHead = rHead.next;
            break;
        }
        else {
            rHead = rHead.next;
        }
    } while (rHead);

}
// @lc code=end

// 初始化链表
function ListNode(val) {
    this.val = val;
    this.next = null;
}

let p = new ListNode(0);
let head = p;

for (let i = 1; i < 7; i++) {
    head.next = new ListNode(i);
    head = head.next;
}

reverseKGroup(p.next, 3);