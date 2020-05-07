/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let result = -1, start = 0, temp = 0;

    if (needle == '') return 0;

    for (let i = 0; i < haystack.length; i++) {
        // console.log(`${i}:${haystack[i]}`, `${start}:${needle[start]}`, needle.length);

        if (needle[start] == haystack[i] && start >= needle.length - 1) {
            result = i - start;
            break;
        }

        if (haystack[i] == needle[start]) {
            start++;

        }
        else {
            i = i - start;
            start = 0;
        }


    }
    console.log(result);
    
    return result;

};

// @lc code=end

strStr('1221321', '21')