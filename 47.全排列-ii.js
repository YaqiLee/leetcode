/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let result = [], used = [];

    generatePermute(result, nums, [], used);

    return result;
};
// @lc code=end

var generatePermute = function (result, nums, use, used) {

    if (use.length == nums.length) {
        result.push(use.slice(0))
        return;
    }

    for (let i = 0; i < nums.length; i++) {


        if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) {
            continue;
        }

        if (!used[i]) {
            use.push(nums[i]);
            used[i] = true;

            generatePermute(result, nums, use, used);
            // 回溯
            used[i] = false;
            use.pop();
        }
    }
}
// @lc code=end

permuteUnique([1, 1, 2]);