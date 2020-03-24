/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    for(let i = 0; i < nums.length; i++) {
        let temp = target - nums[i];
        if(nums.includes(temp)) {
           let index = nums.findIndex(it => it === temp);
           if(index != i) {
               return [i, index]
           }
       }
    }
};

twoSum([3,2,5, 4], 6)
// @lc code=end

