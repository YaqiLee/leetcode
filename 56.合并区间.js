/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

    if(intervals.length <= 0) {  return [] }

    let results = [], last = [];
    // 先进行排序
    intervals.sort((a, b) => a[0] - b[0]);

    last = intervals.shift();
    results.push(last);

    while(intervals.length > 0) {

        let shift = intervals.shift();

        if(shift[0] > last[1]) {
            results.push(shift);
            last = shift;
        }
        else {
            last = [last[0], Math.max(shift[1], last[1])];
            results[results.length - 1] = last;
        }

       
    }

    return results;
};
// @lc code=end

merge([[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]])
