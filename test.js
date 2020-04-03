/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    var nums = new Array(1001).fill(0);
    // 计数排序
    // 统计arr1每个值出现的数量
    for (let i = 0; i < arr1.length; i++) {
        nums[arr1[i]]++;
    }

    var result = [];
    // 第一次排序，针对arr2
    for (let i = 0; i < arr2.length; i++) {
        while(nums[arr2[i]] > 0) {
            result.push(arr2[i]);
            nums[arr2[i]]--;
        }
    }
    // 第二次排序，针对nums剩下不为0的值
    for (let i = 0; i < nums.length; i++) {

        while(nums[i] > 0) {
            result.push(i);
            nums[i]--;
        }
    }

    return result;

};
// @lc code=end

// relativeSortArray([943,790,427,722,860,550,225,846,715,320], [943,715,427,790,860,722,225,320,846,550]); 