n = 36;
let factors = [];
for (let i = 1; i <= Math.sqrt(n); i++) {
  if (n % i == 0) {
    factors.push(i);
    factors.push(n / i);
  }
}
const factor = new Set(factors.reverse());
console.log(factor);
