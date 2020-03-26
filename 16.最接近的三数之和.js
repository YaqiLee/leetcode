/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {

    let len = nums.length;

    if (len < 3) {
        return '';
    }

    let sum = nums[0] + nums[1] + nums[len - 1];
    let closest = Math.abs(target - sum);

    for (let i = 0; i < len; i++) {
        let L = i + 1;
        let R = len - 1;

        while (L < len - 1) {

            let s = nums[i] + nums[L] + nums[R]
            let c  = Math.abs(target - s);


            if(c < closest) {
                closest = c;
                sum = s;
            }

            if (L < R - 1) {
                R--;
            }
            else {
                L++;
                R = len - 1;
            }
        }
    }

    return sum;
};
// @lc code=end

threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82);