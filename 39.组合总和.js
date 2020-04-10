/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = [];

    candidates.sort((a, b) => a - b);

    dfs(result, target, candidates, [], 0);

    return result;
};

var dfs = function (result, target, candidates, temp, begin) {
    // 此时结算，递归终止
    if (target == 0) {
        result.push(temp.slice());
        return;
    }

    for (let i = begin; i < candidates.length; i++) {

        // 剪枝
        if(target - candidates[i] < 0) {
            break;
        }
        // console.log(target, candidates[i]);
        temp.push(candidates[i]);
        dfs(result, target - candidates[i], candidates, temp, i);
        // 删除上一次结算
        temp.pop();
    }
}
// @lc code=end

combinationSum([8,7,4,3], 11)