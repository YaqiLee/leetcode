/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let length = nums.length;

    // 小于最小值
    if(target < nums[0]) {
        return 0;
    }
    // 大于最大值
    if(target > nums[length - 1]) {
        return length;
    }

    let L = 0, R = length - 1;
    let findL = false, findR = false;

    while((!findR || !findL) && L < R) {

        if(nums[L] < target && nums[L+1] <= target) {
            L++;
        }
        else {
            findL = true;
        }

        if(nums[R] > target && nums[R-1] >= target) {
            R--;
        }
        else {
            findR = true;
        }
    }

    return L == R ? L : R;

};
// @lc code=end

console.log(searchInsert([1, 2, 4, 5, 7, 9, 10], 2));

// var searchInsert = function(nums, target) {
//     let length = nums.length;

//     // 大于最大值
//     if(target > nums[length - 1]) {
//         return length;
//     }

//     let i = 0;
    
//     for(i; i < length; i++) {

//         if(nums[i] < target) {
//             continue;
//         }

//         if(nums[i] >= target) {
//             return i;
//         }


//     }
//     return i;
// };