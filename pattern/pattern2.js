let n = 5;
//
let str = "";
for (let i = 0; i < n; i++) {
  //printing space
    for (let j = 0; j < n - i; j++) {
      str += " ";
    }

  //printing str
  for (let j = 0; j < i; j++) {
    str += "*";
  }

  str += "\n";
}
console.log(str);
