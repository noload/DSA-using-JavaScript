function isPrimeNumber(n) {
  let isPrime = true;
  for (i = 2; i * i < n; i++) {
    if (n % i == 0) {
      isPrime = false;
    }
  }
  return isPrime;
}

console.log(isPrimeNumber(20));
