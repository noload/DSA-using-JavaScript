// insertion sort it just check every elent is in proper position or not if not  then it just element to left side

let num = [20, 49, 20, 16, 2, 40];

function insertionnSOrt(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let j = i;
    while (j >= 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      //   j--
    }
  }
  return arr;
}

console.log(insertionnSOrt(num));
