/* Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift. */

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  let sArry = Array.from(s);
  let goalArry = Array.from(goal);
  let firstElement = '';

  for (let i = 0; i < goalArry.length; i++) {
    firstElement = sArry.shift();
    sArry.push(firstElement);
    if (sArry.join('') === goalArry.join('')) {
      return true;
    }
  }
  return false;
};
