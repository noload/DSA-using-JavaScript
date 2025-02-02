function merge(left, right) {
  let sortedArr = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArr.push(left[i]);
      i++;
    } else {
      sortedArr.push(right[j]);
      j++;
    }
  }
  return sortedArr.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([10, 2, 40, 2, 68, 39]));
