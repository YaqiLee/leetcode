/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

    getRidOfRepeat(nums, 0);

};
/**
 * 
 * @param {number[]} nums 原始数组
 * @param {number} start 记录本次开始的位置
 */
var getRidOfRepeat = function (nums, start) {

    for (let i = start; i < nums.length; i++) {
        let n = nums[i], n1 = nums[i-1], n2 = nums[i-2];

        if(n == n1 && n == n2) {
            nums.splice(i, 1);
            getRidOfRepeat(nums, i);
        }
    }

}
// @lc code=end
