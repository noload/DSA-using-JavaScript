function reverseNumber(n) {
  let reverse = 0;
  while (n > 0) {
    let digit = n % 10;
    reverse = reverse * 10 + digit;
    n = parseInt(n / 10);
  }
  return reverse;
}

function reverseNumber2(n) {
  let number = n.toString().split("").reverse().join("");
  console.log(number);
}

console.log(reverseNumber(7956));

reverseNumber2(10093);
