// 0/1 背包问题
// dp[i][j] = max(dp[i−1][j], dp[i−1][j−w[i]]+v[i]) // j >= w[i]
function Knapsack012(w: number[], v: number[], W: number): number[] {
  const dp: number[] = [0];
  for (let i = 1; i <= w.length; i++) {
    for (let j = W; j >= w[i]; j--) {
      dp[j] = dp[j] || 0;
      dp[j - w[i]] = dp[j - w[i]] || 0;
      dp[j] = Math.max(dp[j], dp[j - w[i]] + v[i]);
    }
  }
  return dp;
}
console.log("size", Knapsack01([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1], 10));
console.log("size", Knapsack01([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1], 1));
export {};

// f[i] = Math.max(f[i - 1], f[i - weightTypes[i]] + valueTypes[i])
function Knapsack01(
  weightTypes: number[],
  valueTypes: number[],
  maxWeight: number
): number {
  const curType = weightTypes[0];
  const curValue = valueTypes[0];
  if (curType === undefined || curType > maxWeight) {
    return 0;
  }
  return Math.max(
    curValue +
      Knapsack01(
        weightTypes.slice(1),
        valueTypes.slice(1),
        maxWeight - curType
      ),
    Knapsack01(weightTypes.slice(1), valueTypes.slice(1), maxWeight - 1)
  );
}
