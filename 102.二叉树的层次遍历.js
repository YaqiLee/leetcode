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
    let result = [], seq = [];
    let pL = pR = null;

    seq.push(root);

    while(seq) {
        
       
        
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

levelOrder(root)