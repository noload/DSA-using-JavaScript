let n = 5;
str = "";
for (let i = 0; i < n; i++) {
  //printing space
  for (let j = 0; j < n - i; j++) {
    str += " ";
  }

  //printing star
  for (j = 0; j < i + i + 1; j++) {
    if (i == n - 1) {
      str += "*";
    } else if (j == 0 || j == i + i) {
      str += "*";
    } else {
      str += " ";
    }
  }
  str += "\n";
}
console.log(str);
