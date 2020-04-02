/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let length = nums.length;

    // 大于最大值
    if(target > nums[length - 1]) {
        return length;
    }

    let i = 0;
    for(i; i < length; i++) {

        if(nums[i] < target) {
            continue;
        }

        if(nums[i] >= target) {
            return i;
        }


    }
    return i;
};
// @lc code=end

console.log(searchInsert([1, 2, 4, 5, 7, 9, 10], 3));
