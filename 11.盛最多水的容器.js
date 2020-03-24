/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 暴力解法
// var maxArea = function(height) {
//     let result = 0;
//     for(let i=0; i< height.length; i++) {
//         let x = height[i];
    
//         for(let j=i+1; j < height.length; j++) {
//             let len = j - i;
//             let y = height[j];
//             let area = Math.min(x, y) * len;
//             result = Math.max(area, result);
//         }
//     }

//     return result;
// };
// 双指针法
var maxArea = function(height) {
    let area = 0;
    let l = 0, r = height.length - 1;

    while(l < r) {
        area = Math.max(area, Math.min(height[l], height[r]) * r - l);
        height[l] > height[r] ? r-- : l++;
    }

    return area;
};

// @lc code=end

