/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let m = 1, s = 0, t = 0;
    s = climb_Stairs(0, n);
    console.log(s);
    
};

var climb_Stairs = function(i, n) {
    console.log(i, n);
    
    if (i > n) {
        return 0;
    }
    if (i == n) {
        return 1;
    }
    
    return climb_Stairs(i + 1, n) + climb_Stairs(i + 2, n);
}


// @lc code=end

console.log(climbStairs(5));
