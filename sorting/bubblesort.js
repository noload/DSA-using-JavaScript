/**
 * It is opposite of selection where on every itteration the largest element of array is put at last
 * It do adjucent comparision
 */

let arr = [2, 3, 7, 8, 9, 50];
function bubboleSort(arr) {
  let n = arr.length;
  let swap = false;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      console.log("i" + i, "j ", j);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }
    if (!swap) {
      return arr;
    }
  }
  return arr;
}
console.log(bubboleSort(arr));
