/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    
    var carry = 1;

    for (let i = digits.length - 1; i >= 0; i--) {

        let s = carry + digits[i];

        if(s >= 10) {
            carry = 1;
            digits[i] = s % 10;
        }
        else {
            digits[i] = s;
            carry = 0;
        }
    }
    
    if(carry == 1) {
        // 开头加一个元素 1
        digits.unshift(1);
    }
    
    return digits;

};
// @lc code=end

plusOne([9, 8])