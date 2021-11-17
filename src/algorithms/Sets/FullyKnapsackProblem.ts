// 完全背包问题
function FullyKnapsackProblem(w: number[], v: number[], W: number): number[] {
    const dp: number[] = [0];
    for (let i = 1; i <= w.length; i++) {
        for (let j = w[i]; j <= W; j++) {
            dp[j] = dp[j] || 0;
            dp[j - w[i]] = (dp[j - w[i]]) || 0;
            dp[j] = Math.max(dp[j], dp[j - w[i]] + v[i]);
        }
    }
    return dp;
}
console.log('size', FullyKnapsackProblem([0, 1, 2, 3, 4, 5, 6], [0, 6, 5, 4, 3, 2, 1], 10));
console.log('size', FullyKnapsackProblem([0, 1, 2, 3, 4, 5, 6], [0, 6, 5, 4, 3, 2, 1], 1));
export {}