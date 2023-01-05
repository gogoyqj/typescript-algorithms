// 硬币类型 => weight
// 硬币价值 => 1
// 硬币个数 => 无限制
// total => total weight
// 价值最小
function ChangeCoinProblem(coins: number[], total: number) {
  const dp: number[] = [];
  dp[0] = 0;
  for (let i = 1; i <= coins.length; i++) {
    for (let j = coins[i - 1]; j <= total; j++) {
      dp[j] = dp[j] === undefined ? Infinity : dp[j];
      dp[j - coins[i - 1]] =
        dp[j - coins[i - 1]] === undefined ? Infinity : dp[j - coins[i - 1]];
      dp[j] = Math.min(dp[j], dp[j - coins[i - 1]] + 1);
    }
  }
  return dp[total] === Infinity ? -1 : dp[total];
}

console.log(
  ChangeCoinProblem([0, 1, 4, 5], 13),
  ChangeCoinProblem2([1, 4, 5], 13)
);
console.log(
  ChangeCoinProblem([0, 1, 4, 5], 0),
  ChangeCoinProblem2([1, 4, 5], 0)
);
console.log(ChangeCoinProblem([0, 2], 11), ChangeCoinProblem2([2], 11));
console.log(
  ChangeCoinProblem([0, 1, 2, 5], 25),
  ChangeCoinProblem2([1, 2, 5], 25)
);

// f(v, c) = Math.min(f(v, c - 1), f(v - coinValues[c], c) + 1)
function ChangeCoinProblem2(coinValues: number[], amount: number): number {
  let curValue = coinValues[0];
  if (curValue > amount) {
    return Infinity;
  }
  if (curValue === amount) {
    return 1;
  }
  return Math.min(
    1 + ChangeCoinProblem2(coinValues, amount - curValue),
    coinValues.length > 1
      ? ChangeCoinProblem2(coinValues.slice(1), amount)
      : Infinity
  );
}
