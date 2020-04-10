/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {

    let listNode = new ListNode(0);

    let result = mergeTwoLists(listNode.next, lists);

    return result;
};
// 两两合并
var mergeTwoLists = function (result, lists) {
    let temp = new ListNode(0);
    let tHead = temp;
    let head = result;

    if (lists.length <= 0) {
        return result;
    }

    let plus = lists.shift();

    while (head && plus) {

        if (head.val >= plus.val) {
            tHead.next = plus;
            plus = plus.next;
        }
        else {
            tHead.next = head;
            head = head.next;
        }

        tHead = tHead.next;
    }

    tHead.next = head ? head : plus;

    return mergeTwoLists(temp.next, lists);

}
// @lc code=end

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

let p1 = new ListNode(0);
let head2 = p1;

for (let i = 5; i < 9; i++) {
    head2.next = new ListNode(i);
    head2 = head2.next;
}

mergeKLists([p1.next, p.next]);