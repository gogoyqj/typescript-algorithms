// 完全背包问题
// dp[i][j] = max(dp[i−1][j], dp[i][j−w[i]]+v[i]) // j >= w[i]
function FullyKnapsackProblem(w: number[], v: number[], W: number): number[] {
  const dp: number[] = [0];
  for (let i = 1; i <= w.length; i++) {
    for (let j = w[i]; j <= W; j++) {
      dp[j] = dp[j] || 0;
      dp[j - w[i]] = dp[j - w[i]] || 0;
      dp[j] = Math.max(dp[j], dp[j - w[i]] + v[i]);
    }
  }
  return dp;
}
console.log(
  "size",
  FullyKnapsackProblem([0, 1, 2, 3, 4, 5, 6], [0, 6, 5, 4, 3, 2, 1], 10),
  FullyKnapsackProblem2([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1], 10)
);
console.log(
  "size",
  FullyKnapsackProblem([0, 1, 2, 3, 4, 5, 6], [0, 2, 5, 9, 3, 2, 1], 10),
  FullyKnapsackProblem2([1, 2, 3, 4, 5, 6], [2, 5, 9, 3, 2, 1], 10)
);
console.log(
  "size",
  FullyKnapsackProblem([0, 1, 2, 3, 4, 5, 6], [0, 6, 5, 4, 3, 2, 1], 1),
  FullyKnapsackProblem2([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1], 1)
);
export {};

// f(i) = max(f(i -1), f(i - weightTypes[i]) + valueTypes[i])
function FullyKnapsackProblem2(
  weightTypes: number[],
  valueTypes: number[],
  maxWeight: number
): number {
  let curType = weightTypes[0];
  let curValue = valueTypes[0];
  if (curType === undefined || curType > maxWeight) {
    return 0;
  }
  return Math.max(
    curValue +
      FullyKnapsackProblem2(
        weightTypes.slice(0),
        valueTypes.slice(0),
        maxWeight - curType
      ),
    FullyKnapsackProblem2(
      weightTypes.slice(1),
      valueTypes.slice(1),
      maxWeight
    )
  );
}
