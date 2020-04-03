/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let carry = 0, result = '';
    let few, more;
    let len1 = a.length, len2 = b.length;
    let span = Math.abs(len1 - len2);

    if (len1 > len2) {
        more = a;
        few = b;
    }
    else {
        more = b;
        few = a;
    }

    for (let i = more.length - 1; i >= 0; i--) {
        let t1 = more[i], t2 = few[i - span];
        let s = carry + Number(t1) + Number(t2 || 0)
        let { c, t } = getNum(s);

        carry = c;
        result = t + result;

    }

    if (carry == 1) {
        result = '1' + result;
    }

    return result
};
var getNum = function (sum) {
    let c, t = 0;

    switch (sum) {
        case 2:
            c = 1;
            t = 0;

            break;
        case 3:
            c = 1;
            t = 1;
            break;

        default:
            c = 0;
            t = sum;
            break;
    }

    return { c, t }
}
// @lc code=end

addBinary(
    "10101",
    "1111");
