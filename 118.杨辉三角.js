/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let arr = [[], [[1]], [[1], [1, 1]]];

    if (numRows <= 2) {
        return arr[numRows];
    }

    let result = arr[2];

    generateRows(result, result[1], numRows - 3);

    return result

};
var generateRows = function (result, previous, numRows) {

    if (numRows < 0) {
        return;
    }

    let t = [1];
    for (let i = 0; i < previous.length - 1; i++) {
        t[i+1] = previous[i] + previous[i+1];
    }

    t.push(1);
    result.push(t);
    generateRows(result, t, numRows-1);
}
// @lc code=end
generate(5);
