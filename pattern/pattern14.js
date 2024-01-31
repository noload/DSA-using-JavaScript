let n = 5;
let str = "";
let index = 0;
let str2 = "";
let ch = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

for (let i = 1; i <= n; i++) {
  index = 0;
  for (let j = 1; j <= i; j++) {
    str += ch[index] + " ";
    index++;
  }
  str += "\n";
}

for (let i = 1; i <= n; i++) {
    index=0
  for (let j = n; j >=i; j--) {
    str2 += ch[index] + " ";
    index++;
  }
  str2 += "\n";
}

console.log(str);
console.log("--------------");
console.log(str2);