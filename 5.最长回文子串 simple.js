/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=m
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = "", len = s.length;

  for (let i = 0; i < len; i++) {
    let even = "",
      odd = start = s.charAt(i),
      end = s.charAt(i + 1);

    odd = getPalindrome(start, s, i, i);

    // 偶数
    if (start == end) {
      even = getPalindrome(start + end, s, i, i + 1);
    }

    result = odd.length > result.length ? odd : result;
    result = even.length > result.length ? even : result;
  }

  return result;
};

function getPalindrome(v, s, l, r) {
  let m = n = '', x = 1;

  while (!!(m = s.charAt(l - x)) && !!(n = s.charAt(r + x))) {
    if (m == n) {
      x++;
      v = m + v + n;
    } else {
      break;
    }
  }

  return v;
}
// @lc code=n
