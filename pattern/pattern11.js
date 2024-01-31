let n = 4;
let str = "";
let space = 2 * (n - 1);
for (let i = 1; i <= n; i++) {
  // number
  for (let j = 1; j <= i; j++) {
    str += j;
  }

  //space
  for (let j = 1; j <= space; j++) {
    str += " ";
  }

  //number
  for (let j = i; j >= 1; j--) {
    str += j;
  }

  str += "\n";
  space -= 2;
}

console.log(str);
