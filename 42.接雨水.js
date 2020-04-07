/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 动态规划，题解，详细通俗的思路分析，多解法
var trap = function (height) {

    let sum = 0;
    let max_left = [0];
    let max_right = Array(height.length).fill(0);
    
    for (let i = 1; i < height.length - 1; i++) {
        max_left[i] = Math.max(max_left[i - 1], height[i - 1]);
        
    }

    for (let i = height.length - 2; i >= 0; i--) {
        max_right[i] = Math.max(max_right[i + 1], height[i + 1]);
    }


    for (let i = 1; i < height.length - 1; i++) {
        let min = Math.min(max_left[i], max_right[i]);
        if (min > height[i]) {
            sum = sum + (min - height[i]);
        }
    }


    return sum;
};
// @lc code=end

trap([0,1,0,2,1,0,1,3,2,1,2,1]);