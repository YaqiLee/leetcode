/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let head = new ListNode(0);
    let carry = head;

    if (!l1 || !l2) {
        return l1 || l2 || ''
    }

    do {

        if(l1 && l2) {

            if(l1.val > l2.val) {
                carry.next = new ListNode(l2.val);
                l2 = l2.next;
            }
            else {
                carry.next = new ListNode(l1.val);
                l1 = l1.next;
            }
        }
        else if(l1) {
            carry.next = new ListNode(l1.val);
            l1 = l1.next;
        }
        else if(l2) {
            carry.next = new ListNode(l2.val);
            l2 = l2.next;
        }

        carry = carry.next;

    }
    while (l1 || l2)

    return head.next;
};
// @lc code=end

