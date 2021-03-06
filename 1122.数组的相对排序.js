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
    var buckets = [...Array(arr2.length + 1)].map((v, i) => [arr2[i]] || '');

    arr1.sort((a, b) => a - b)
    for (let i = 0; i < arr1.length; i++) {
        let t = arr1[i];
        let index = buckets.findIndex(f => f[0] == t);

        if (index >= 0) {
            buckets[index].push(t);
        }
        else {
            buckets[arr2.length].push(t);
        }
    }

    let result = [];

    for (let i = 0; i < buckets.length; i++) {
        buckets[i].shift();
        result = [...result, ...buckets[i]];
    }

    return result;

};
// 计数排序
// 题目固定值不会大于1000， 可以使用计数排序
// var relativeSortArray = function (arr1, arr2) {
//     var nums = new Array(1001).fill(0);
//     
//     // 统计arr1每个值出现的数量
//     for (let i = 0; i < arr1.length; i++) {
//         nums[arr1[i]]++;
//     }

//     var result = [];
//     // 第一次排序，针对arr2
//     for (let i = 0; i < arr2.length; i++) {
//         while(nums[arr2[i]] > 0) {
//             result.push(arr2[i]);
//             nums[arr2[i]]--;
//         }
//     }
//     // 第二次排序，针对nums剩下不为0的值
//     for (let i = 0; i < nums.length; i++) {

//         while(nums[i] > 0) {
//             result.push(i);
//             nums[i]--;
//         }
//     }

//     return result;

// };
// @lc code=end

relativeSortArray([28,6,22,8,44,17], [22,28,8,6]); 