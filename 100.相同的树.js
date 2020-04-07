/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {

    if (p == null && q == null) return true;
    if (p == null || q == null) return false;
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};


// @lc code=end

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(1);
let left = new TreeNode(2);
// let right = new TreeNode(20);
// right.left = new TreeNode(15);
// right.right = new TreeNode(7);

root.left = left;
// root.right = right;

let root2 = new TreeNode(1);
let left2 = new TreeNode(null);
let right2 = new TreeNode(2);
// right2.left = new TreeNode(15);
// right2.right = new TreeNode(7);

root2.left = left2;
root2.right = right2;

isSameTree(root, root2);