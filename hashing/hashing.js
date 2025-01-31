let arr = ["a", "b", "c", "d", "e", "f", "g"];
let hash = new Array(10000).fill(0);

//pre computation
for (const item of arr) {
  hash[item] += 1;
}

console.log(hash["a"]);
