/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let result = []
    combineHelper(result, n, k, 1, [], []);
    return result;
};

var combineHelper = function (result, n, k, start, used, temp) {

    if (temp.length >= k) {
        result.push(temp.slice());
        return;
    }

    for (let i = start; i <= n; i++) {

        if (!used[i]) {
            temp.push(i);
        }

        console.log(start);
        
        used[i] = true;

        combineHelper(result, n, k, i + 1, used, temp);

        used[i] = false;
        temp.pop();

    }
}
// @lc code=end

combine(0, 1);