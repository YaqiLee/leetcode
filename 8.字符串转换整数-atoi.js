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

    let result = '';
    let operate = ['+', '-'];
    let max = Math.pow(2, 31) - 1, min = -1 * Math.pow(2, 31);

    // 先去除字符串开头空格
    str = str.trimLeft();

    let first = str.charAt(0);

    if(isNaN(first) && !operate.includes(first)) {
        return 0;
    }

    result = result + first;

    for (let i = 1; i < str.length; i++) {
        
        if(str[i] === ' ' || isNaN(str[i])) {
            break;
        }

        result += str[i];
    }

    return isNaN(result) ? 0 : Math.min(max, Math.max(result, min));
    
};

// @lc code=end
// myAtoi("-2222222 22ddd dd")