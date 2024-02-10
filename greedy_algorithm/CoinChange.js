// Given a set of coin denominations (e.g., [1, 5, 10, 25]), the task is to find the minimum number of coins needed to make a given amount.
// output -> 65

/**
 * Greedy Algorithm
 * Take empty array
 *
 *
 */

function coinChange(coins, amount) {
  //sorting the coins in descending order
  coins.sort((a, b) => b - a);
  let coinCount = 0;
  let selectedCoins = [];
  let remain = amount;
  for (const c of coins) {
    while (remain >= c) {
      remain -= c;
      coinCount++;
      selectedCoins.push(c);
    }
    if (remain === 0) {
      break;
    }
  }

  return { coinCount, selectedCoins };
}

let givenCoin = [1, 2, 5, 10, 25];
let target = 80;
const { coinCount, selectedCoins } = coinChange(givenCoin, target);
console.log(coinCount, selectedCoins);
