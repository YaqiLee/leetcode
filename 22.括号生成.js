/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var used = [];

var generateParenthesis = function (n) {
    let brackets = [];

    generateBrackets(brackets, "", n, n);

    // console.log(brackets);
    
    return brackets;
};

var generateBrackets = function (res, str, l, r) {

    console.log(str, l, r);
    
    if(l == 0 && r == 0){
        res.push(str);
        return;
    }
    if(l > 0){
        generateBrackets(res, str + '(', l-1, r);
    }
    if(r > 0 && r > l){
        generateBrackets(res, str + ')', l, r-1);
    }
    return;


}

// @lc code=end

generateParenthesis(2);
