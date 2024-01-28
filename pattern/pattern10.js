let n = 9;
let str = "";
for (let i = 1; i <= n; i++) {
  if (i <= 5) {
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
  } else {
    for (let j = 1; j <=n-i+1; j++) {
      str += "*";
    }
  }
  str += "\n";
}
console.log(str);
