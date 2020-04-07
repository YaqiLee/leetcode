/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
 * @param {TreeNode} right
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let result = [];

    if(!root) return [];

    loopTreeNode(result, root, 0);

    return result;
};

var loopTreeNode = function(result, node, level) {

    result[level] = result[level] || []
    result[level].push(node.val);

    level++;

    if(node.left) {
        loopTreeNode(result, node.left, level);
    }

    if(node.right) {
        loopTreeNode(result, node.right, level)
    }
}

// @lc code=end

// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }

// let root = new TreeNode(3);
// let left = new TreeNode(9);
// let right = new TreeNode(20);
// right.left = new TreeNode(15);
// right.right = new TreeNode(7);

// root.left = left;
// root.right = right;

// levelOrder(root)