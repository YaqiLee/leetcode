/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = [], used = [];

    for(let i=0; i < strs.length; i++) {
        let a = strs[i].split('').sort().join('');
        let index = used.findIndex(f => f == a);

        if(index < 0) {
            used.push(a);
            result.push([strs[i]]);
        }
        else {
            result[index].push(strs[i]);
        }
    }
    return result;
};
// @lc code=end
 
groupAnagrams([])