/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let result = []

    permutationHelper(result, -1, n, [], [], k);

    console.log(result);

    return result[k - 1] ? result[k - 1].join('') : '';
};

var permutationHelper = function (result, start, n, used, temp, k) {

    if (temp.length >= n) { 
        result.push(temp.slice());
        return;
    }

    for (let i = 1; i <= n; i++) {

        if(!used[i]) {

            temp.push(i);
            used[i] = true;

            permutationHelper(result, i, n, used, temp, k);
        
            used[i] = false;
            temp.pop();

        }

       
    }
}
// @lc code=end

getPermutation(3, 8);