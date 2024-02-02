// let num = 1634;
// function armstrongNumber(n) {
//   let sum = 0;
//   while (n > 0) {
//     let digit = n % 10;
//     sum += digit * digit * digit;
//     n = parseInt(n / 10);
//   }
//   console.log(sum);
//   if (sum == num) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(armstrongNumber(num));

// program to check an Armstrong number of three digits

let sum = 0;
const number = 143

// create a temporary variable
let temp = number;
while (temp > 0) {
  // finding the one's digit
  let remainder = temp % 10;

  sum += remainder * remainder * remainder;

  // removing last digit from the number
  temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (sum == number) {
  console.log(`${number} is an Armstrong number`);
} else {
  console.log(`${number} is not an Armstrong number.`);
}
