/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
// 测试正确 ，[bbbbb]提交会报错 不知道为什么
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s) {
    return 0;
  }

  let a = s.split("");
  let m = loop(a);
  console.log("result:", m);

  return m;
};
var maxNum = 0;
function loop(a = [], res = []) {
    console.log(maxNum);

  a.map(f => {
    if (res.includes(f)) {
      a.shift();
      loop(a, []);
    } else {
      res.push(f);
    }
    console.log(res.length, maxNum);
    
    maxNum = Math.max(res.length, maxNum);
  });

  return Math.max(res.length, maxNum);
}

lengthOfLongestSubstring("bbbbbb");
// @lc code=end
