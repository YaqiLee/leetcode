/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let n = Math.abs(x), max = 2 ** 31;
    n = n.toString().split('').reverse().join('');

    if(x < 0) {
        return -1 * n > max *-1 ? -1 * n: 0;
    }
    else {
        return n > max - 1 ? 0 : n;
    }
  
};

// @lc code=end

