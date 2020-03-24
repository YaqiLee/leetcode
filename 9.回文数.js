/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let left = x, result = '';

    while(left >= 1) {
        result += Math.trunc(left % 10);
        left = left / 10;
    }

    return left == 0 || x == result
};
// @lc code=end
