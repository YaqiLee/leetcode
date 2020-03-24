/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    if(numRows <= 1) {  return s;  }

    let str = '';
    let res = null, list1 = [], list2 = [];
    let reg = new RegExp(`(\\S{1,${numRows}})(\\S{0,${numRows-2}})`, 'g');


    while((res = reg.exec(s)) != null) {

        list1.push(res[1])

        if(res[2].length == numRows - 2) {
            list2.push(` ${res[2]} `.split('').reverse())
        }
        else {
            list2.push(` ${res[2]}`.padEnd(numRows, ' ').split('').reverse())
        }
    }

    for(let i = 0; i< numRows; i++ ){
        for(let x=0; x < list1.length; x++) {
            str = str + list1[x].charAt(i) + list2[x][i].trim();
        }
       
    }

    return str
};


// @lc code=end

