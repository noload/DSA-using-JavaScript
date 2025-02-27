var rotate = function (nums, k) {
  let kcount = 0;
  let n = nums.length;
  k > n ? (k = k % n) : k;
  while (kcount < k) {
    let temp = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
      nums[i + 1] = nums[i];
    }

    nums[0] = temp;
    kcount++;
  }
};
let nums = [1, 2, 3, 4, 5, 6, 7];

rotate(nums, 3);
console.log(nums);
