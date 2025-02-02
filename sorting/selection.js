//selection sorting where each time smallest elemnt from array identified and place it to its correct position;

/*
The algorithm steps are as follows:

    First, we will select the range of the unsorted array using a loop (say i) that indicates the starting index of the range.
    The loop will run forward from 0 to n-1. The value i = 0 means the range is from 0 to n-1, and similarly, i = 1 means the range is from 1 to n-1, and so on.
    (Initially, the range will be the whole array starting from the first index.)
    Now, in each iteration, we will select the minimum element from the range of the unsorted array using an inner loop.
    After that, we will swap the minimum element with the first element of the selected range(in step 1). 
    Finally, after each iteration, we will find that the array is sorted up to the first index of the range. 
*/
let arr = [50, 20, 2, 5879, 32, 10];

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
}

console.log(selectionSort(arr));
