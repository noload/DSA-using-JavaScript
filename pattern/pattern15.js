let n = 5;
let str = "";
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
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    str += " ";
  }

  index = 0;
  for (let j = 1; j <= 2 * i + 1; j++) {
    str += ch[index];
    if (j <= (2 * i + 1) / 2) {
      index++;
    } else {
      index--;
    }
  }

  for (let j = 0; j < n - i - 1; j++) {
    str += " ";
  }
  str += "\n";
}

console.log(str);
