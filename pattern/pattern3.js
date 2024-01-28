let n = 5;
str = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);
