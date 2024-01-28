let arr1 = [1, 3, 4, 8, 10, 12];
let arr2 = [2, 4, 6, 8, 10, 20];
function findMedian(arr1, arr2) {
  let newArr = [...arr1, ...arr2];
  console.log(newArr);
  newArr.sort((a, b) => a - b);
  console.log(newArr);
  //    let unique = [...new Set(newArr)]
  //    console.log(unique);

  //    if (newArr.length % 2 ==0) {

  //    }
}

findMedian(arr1, arr2);
