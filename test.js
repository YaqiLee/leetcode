/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
// 自底向上
var isBalanced = function (root) {

    return height(root) >= 0;
};

var height = function (root) {
    if (root == null) {
        return 0;
    }
    let leftHeight = height(root.left);
    let rightHeight = height(root.right);
    if (leftHeight == -1 || rightHeight == -1 || Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    } else {
        return Math.max(leftHeight, rightHeight) + 1;
    }

}

// @lc code=end
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(3);
let left = new TreeNode(9);
let right = new TreeNode(20);
right.left = new TreeNode(15);
right.right = new TreeNode(7);

root.left = left;
root.right = right;

isBalanced(root)