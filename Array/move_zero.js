let arr = [10, 0, 30, 50, 0, 40, 0, 0, 40];
// let arr2 = [10, 0, 30, 50, 0, 40, 0, 0, 40];
// let arr3 = [10, 0, 30, 50, 0, 40, 0, 0, 40];

function bruteforce(arr) {
  let temp = [];
  let i = 0;
  for (let num of arr) {
    if (num > 0) {
      temp[i] = num;
      i++;
    }
  }
  console.log(temp);
  //fill array
  for (let k = 0; k < temp.length; k++) {
    arr[k] = temp[k];
  }
  console.log(arr);
  for (let j = temp.length; j < arr.length; j++) {
    arr[j] = 0;
  }
  return arr;
}

function optimalSolution(arr) {
  let j = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      j = i;
      break;
    }
  }
  if (j == -1) {
    return arr;
  }
  for (let i = j + 1; i < arr.length; i++) {
    if (arr[i] != 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  return arr;
}
// console.log(bruteforce(arr));
console.log(optimalSolution(arr));
