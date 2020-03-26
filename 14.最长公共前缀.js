/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    
    if(!strs || strs.length <= 0) {
        return ''
    }

    return getCommonPrefix(strs, 0)
};

var getCommonPrefix = function(strs, current) {

    let L = strs[0].charAt(current);

    if(!L) {
        return strs[0].substring(0, current);
    }

    for (let i = 1; i < strs.length; i++) {
       
        let start = strs[i].charAt(current);

        if(start != L) {
            return  strs[0].substring(0, current);
        }
        
    }

    return getCommonPrefix(strs, ++current);
}
// @lc code=end
console.log(longestCommonPrefix( ["dog","racecar","car"]));
