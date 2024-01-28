let n = 5;
let str = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    if (j == 0 || j == i) {
      str += "*";
    } else if (i == n - 1) {
      str += "*";
    } else {
      str += " ";
    }
  }
  str += "\n";
}
console.log(str);
