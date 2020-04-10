/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {

    // 顺时针旋转270°（对角线翻转）
    for (let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix.length - i; j++) {

            let temp = matrix[i][j];
            
            matrix[i][j] = matrix[matrix.length -1 - j][matrix.length - 1 - i];
            matrix[matrix.length - 1 - j][matrix.length - 1 - i] = temp;

        }
    }
    // 逆时针旋转180°（垂直翻转）
    // 只需要对折 n / 2 行，
    for (let i = 0; i < ( matrix.length / 2 ); i++) {
        for(let j = 0; j < matrix.length; j++) {

            let temp = matrix[i][j];
            
            matrix[i][j] = matrix[matrix.length - 1 - i][j];
            matrix[matrix.length - 1 - i][j] = temp;
        }
    }
};
// @lc code=end

rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
