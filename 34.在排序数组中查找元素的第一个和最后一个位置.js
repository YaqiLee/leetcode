/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

    let start = nums.indexOf(target);
    if (start === -1) return [-1, -1];

    for (let end = start + 1; end < nums.length; end++) {
        if (nums[end] !== target) {
            return [start, end - 1]
        }
    }
    return [start, nums.length - 1]

};

