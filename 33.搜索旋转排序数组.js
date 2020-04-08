/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0, right = nums.length - 1;

    return searchHelper(nums, left, right, target);
};
var searchHelper = function (nums, left, right, target) {

    let mid = Math.round((left + right) / 2);

    if (left >= right) {
        return -1;
    }

    if (nums[left] == target) {
        return left;
    }
    if (nums[right] == target) {
        return right;
    }
    if (nums[mid] == target) {
        return mid;
    }


    // 左边序列是有序的
    if (nums[mid] > nums[left]) {

        if (target < nums[mid] && target > nums[left]) {
            return searchHelper(nums, left + 1, mid - 1, target);
        }
        else {
            return searchHelper(nums, mid + 1, right - 1, target);
        }
    }
    // 右端点有序
    else {

        if (target > nums[mid] && target < nums[right]) {
            return searchHelper(nums, mid + 1, right - 1, target);
        }
        else {
            return searchHelper(nums, left + 1, mid - 1, target);
        }

    }
}
// @lc code=end

let res = search([5, 6, 7, 8, 0, 1, 2, 3, 4], 4);
console.log(res);
