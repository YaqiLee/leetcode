/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merge = [...nums1, ...nums2].sort((a,b) => a - b);
    let length = merge.length, result = 0, x = 0;

    // 偶数
    if(length % 2 == 0) {
        x = length / 2;
        result =(merge[x] + merge[x - 1]) / 2
    }
    else {
        x = (length + 1) / 2;
        result = merge[x - 1];
    }

    return result;
};
// @lc code=end
