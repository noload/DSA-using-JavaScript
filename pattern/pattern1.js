let n = 5;
str = "";
for (let i = 0; i < n; i++) {
  //printing all start
  if (i === 0 || i === n - 1) {
    for (let j = 0; j < n; j++) {
      str += "*";
    }
  } else {
    //printing specific star
    for (let j = 0; j < n; j++) {
      if (j == 0 || j == n - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
  }
  str += "\n";
}

console.log(str);
