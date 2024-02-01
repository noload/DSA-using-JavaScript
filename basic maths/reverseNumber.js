function reverseNumber(n) {
  let reverse = 0;
  while (n > 0) {
    let digit = n % 10;
    reverse = reverse * 10 + digit;
    n = parseInt(n / 10);
  }
  return reverse;
}

console.log(reverseNumber(7956));
