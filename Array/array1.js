// let arr = [10, 20, 27, 39, 90, 40, 30, 10, 22, 30];

// find second largest and smallest element
// 1
// function find2ndLargestSmallest(arr) {
//   let secondLargest = secondLargestNum(arr);
//   let secondSmallest = secondSmallestNum(arr);

//   //   console.log({ secondLargest, secondSmallest });
// }

// function secondLargestNum(arr) {
//   let unique = [...new Set(arr)];
//   let first = -Infinity;
//   let second = -Infinity;

//   for (let num of unique) {
//     if (first < num) {
//       let temp = first;
//       first = num;
//       second = temp;
//     } else if (num < first && num > second) {
//       second = num;
//     }
//   }
//   return second;
// }

// function secondSmallestNum(arr) {
//   let unique = [...new Set(arr)];
//   let first = Infinity;
//   let second = Infinity;

//   for (let num of unique) {
//     if (first > num) {
//       let temp = first;
//       first = num;
//       second = temp;
//     } else if (num > first && num < second) {
//       second = num;
//     }
//   }
//   return second;
// }

// find2ndLargestSmallest(arr);

// 2. Check array is sorted or not
function checkSortedArr(arr) {
  let sorted = true;
  arr.forEach((element, index) => {
    if (element > arr[index + 1]) sorted = false;
  });
  return sorted;
}
// let sortedArr = [10, 20, 30, 40, 50];
// console.log(checkSortedArr(sortedArr));

//2. Advannce
// Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.
// There may be duplicates in the original array.
// Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: true
// Explanation: [1,2,3,4,5] is the original sorted array.
// You can rotate the array by x = 3 positions to begin on the element of value 3: [3,4,5,1,2].

// function rotate(arr) {
//   let temp = arr.pop();
//   arr.unshift(temp);
//   return arr;
// }

// let nums = [3, 4, 5, 1, 2]; //true
// let  nums=[2, 1, 3, 4]; // false
// let nums = [1, 1, 1];

// function checkSorted(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const newArr = rotate(arr);
//     let sorted = checkSortedArr(newArr);
//     if (sorted) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(checkSorted(nums));


