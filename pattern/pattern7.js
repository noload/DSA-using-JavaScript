let n = 5;
let str = "";
for (let i = 0; i < n; i++) {
  //printing space
  for (let j = 0; j < i; j++) {
    str += " ";
  }

  //printing star
  for (let j = 0; j < 10 - ((i + i) + 1); j++) {
    str += "*";
  }

  //print space

  str += "\n";
}
console.log(str);
