/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {

    if(root == null) {
        return 0;
    }
    else {
        let n = maxDepth(root.left);
        let m = maxDepth(root.right);
    
        return Math.max(n, m) + 1;
    }

};

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

console.log(maxDepth(root));

