/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {

    let length = nums.length, result = [], used = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < length; i++) {
        let L = i + 1, M = i + 2, R = length - 1;




        while (M < R) {

            let a = [nums[i], nums[L], nums[M], nums[R]];
            let s = nums[i] + nums[L] + nums[M] + nums[R];

            // console.log(a);

            if (s < target) {

                if (M < R - 1) {
                    M++;
                }
                else {
                    L++;
                    M = L + 1;
                    R = length - 1;
                }

                console.log(nums[i],nums[L],nums[M],nums[R]);
                
            }
            else if (s > target) {
                R--;
            }
            else {

                L++;
                M = L + 1;
                R = length - 1;

                result.push(a)
            }
        }
    }

    console.log(result);

    return result;
};
// @lc code=end

fourSum([1, 0, -1, 0, -2, 2], 1);