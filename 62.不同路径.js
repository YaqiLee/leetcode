/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */
// 动态规划，多阶段转化为单阶段求解,
// dp[i][j] = dp[i - 1][j] + dp[i][j - 1], dp[2][2] = dp[1][2] + dp[2][1]
// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let dp = Array(m).fill(Array(n));
    console.log(dp);
    
    for (let i = 0; i < n; i++) dp[0][i] = 1;
    for (let i = 0; i < m; i++) dp[i][0] = 1;
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            console.log(dp[i - 1][j] , dp[i][j - 1]);
            
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];     
        }
    }
    return dp[m - 1][n - 1];

};

// @lc code=end

uniquePaths(3, 4);

