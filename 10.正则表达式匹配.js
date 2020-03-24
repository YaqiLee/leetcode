/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {

    console.log(s, p);
    
    if (!p) { return !s; };

    let first = (s && (s.charAt(0) == p.charAt(0) || p.charAt(0) == '.'));

    
    if(p.length >= 2 && p.charAt(1) == '*') {
        return (isMatch(s, p.substring(2)) || (first && isMatch(s.substring(1), p)))
    }
    else {
        return first && isMatch(s.substring(1), p.substring(1));
    }
};

// @lc code=end
console.log(isMatch('ab', 'a*'));
