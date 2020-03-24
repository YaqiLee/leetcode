/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * ex: pwawkew
 * 1. 遍历字符串
 * 2. 如果arr中已存在，
 *    计算当前最大值 math.max(arr.length, ans);
 *    截取已经计算过的数组 从重复索引值开始
 * 3. 无论如何都会把当前值push进arr数组中
 */
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let ans = 0, arr = [];

  for(let a of s) {
    
    if(arr.includes(a)) {
      // 重复数字的位置
      let ri = arr.findIndex(f => f == a);
      
      ans = Math.max(arr.length, ans);
      arr.splice(0, ri + 1);

    }

    arr.push(a);
    
  }

  return Math.max(arr.length, ans);
};

// @lc code=end
