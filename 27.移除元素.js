/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    removeLoop(nums, val);
};
var removeLoop = function (nums, val) {

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] == val) {
            nums.splice(i, 1);
            removeLoop(nums, val);
        }
    }
}
// @lc code=end

removeElement([1, 2, 5, 4, 5, 6, 7], 5);