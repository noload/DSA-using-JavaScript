const set = new Set([1, 2, 3]);
set.add(10);
console.log(set.has(10));

console.log(set.size);

for (const item of set) {
  console.log(item);
}
