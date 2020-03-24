/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let str = "",
    len = s.length;

  if (len == 2) {
    return s.charAt(0) == s.charAt(1) ? s : s.charAt(0);
  } 

  for (let i = 0; i < len; i++) {
    let x = 1,
      m = "",
      n = "",
      z = '',
      v = s.charAt(i),
      tag = true;

    while ((m = s.charAt(i - x)) != "" && (n = s.charAt(i + x)) != "") {
      
      if(m == n) {
        x++;
        v = m + v + n;
      }
      else {
        break;
      }
      // console.log('v1:', v);
    }

    let y = 1, start = '', end = '', v2 = '';

    if(s.charAt(i) == s.charAt(i+1)) {
      v2 = s.charAt(i) + s.charAt(i+1);

      while(s.charAt(i) == s.charAt(i+1) && (start = s.charAt(i - y)) != '' && (end = s.charAt( i + 1 + y)) != '' ) {

        if(start == end) {
          y++;
          v2 = start + v2 + end;
        }
        else {
          break;
        }
        
        // console.log('v2:', v2);
        
      }
    }

    str = v.length > str.length ? v : str;
    str = v2.length > str.length ? v2 : str;
  }

  return str;
};

console.log(longestPalindrome("bbbb"));
;
// @lc code=end
