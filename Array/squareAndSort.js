/**
 * 
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

 */
var sortedSquares = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let idx = end;
  let sortPowArr = [];

  while (idx > -1) {
    if (Math.abs(nums[start]) > Math.abs(nums[end])) {
      sortPowArr[idx--] = nums[start] * nums[start];
      start++;
    } else {
      sortPowArr[idx--] = nums[end] * nums[end];
      end--;
    }
  }
  return sortPowArr;
};

console.log(sortedSquares([-4, -3, 0, 1, 3]));
