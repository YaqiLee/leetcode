/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = [], used = [];

    generatePermute(result, nums, [], used);
    
    return result;

};

var generatePermute = function (result, nums, use, used) {

    if (use.length == nums.length) {
        result.push(use.slice(0))
        return  ;
    }

    for (let i = 0; i < nums.length; i++) {

        if (!used[i]) {
            use.push(nums[i]);
            used[i] = true;
   
            generatePermute(result, nums, use, used);

            used[i] = false;
            use.pop();
        }
    }
}
// @lc code=end

permute([1, 2, 3]);
