/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {

    let max = Math.pow(2, 31) - 1, min = -1 * Math.pow(2, 31);

    str = str.trim();
    str = parseInt(str);

    if(isNaN(str)) {
        return 0;
    }

    return str > max ? max : str < min ? min : str;

};

// @lc code=end
