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

    console.log(nums);

    for (let i = 0; i < length; i++) {
        let L = i + 1, M = i + 2, R = length - 1;


        while (M < R) {

            let a = [nums[i], nums[L], nums[M], nums[R]];
            let s = nums[i] + nums[L] + nums[M] + nums[R];


            if (s < target) {
                M++;

                if(nums) {

                }
            }
            else if (s > target) {
                R--;
            }
            else {
                M++;
                R--;

                if (!used.includes(a.join())) {
                    used.push(a.join());
                    result.push(a)
                }
            }

            if (M >= R) {
                L++;
                M = L + 1;
                R = length - 1
            }


        }
    }

    console.log(result);

    return result;
};
// @lc code=end

fourSum([1, 2, -1, -2, 0, 0] , 0);
// fourSum([-1, -2, 3, 0, 2, 7, 4, 4, 5, -2, 1] , 5);
// fourSum([1, 2, -1, -2, 0, 0,3,4,5,6,7,8,-9,-4,-2,-1,3,4], 5);
