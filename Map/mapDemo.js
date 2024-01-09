const map = new Map([
  [1, "Vaibhav"],
  [2, "Ram"],
  [3, "Keshav"],
  [4, "Vishal"],
]);


map.set(5,"Pranali")
console.log(map.size);
console.log(map.has(5))
for (const [key, value] of map) {
    console.log(`${key} : ${value}`);
  }
  