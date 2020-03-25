// 排序双指针
var threeSum = function (nums) {
    let res = [];
    if (nums.length < 3) {
        return [];
    }

    nums.sort((a, b) => a > b ? 1 : -1);

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] > 0) {
            break;
        }

        if (i > 0 && nums[i] == nums[i - 1]) {
            console.log(nums[i], nums[i + 1]);
            continue;
        }

        let L = i + 1, R = nums.length - 1;

        while (L < R) {

            if (nums[i] + nums[L] + nums[R] == 0) {
                
                res.push([nums[i], nums[L], nums[R]]);

                while (L < R && nums[L] == nums[L + 1])
                    L = L + 1
                while (L < R && nums[R] == nums[R - 1])
                    R = R - 1

                R = R - 1;
                L = L + 1;
            }
            else if (nums[i] + nums[L] + nums[R] > 0) {
                R = R - 1;
            }
            else {
                L = L + 1;
            }


        }

    }
    // console.log(nums);

    return res;
};
