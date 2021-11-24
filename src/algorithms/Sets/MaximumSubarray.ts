// The maximum subarray problem is the task of finding the contiguous subarray within a one-dimensional array, a[1...n], of numbers which has the largest sum
// export function MaximumSubarrayDP(nums: number[]) {
//   const MSArr: number[] = Array(nums.length).fill(0);
//   let maxStartIndex = 0;
//   let curStartIndex = 0;
//   let maxEndIndex = nums.length - 1;
//   let curSum = 0;
//   let maxSum = -Infinity;
//   for (let i = 0; i < nums.length; i++) {
//     curSum += nums[i];
//     if (maxSum < curSum) {
//       maxSum = curSum;
//       maxStartIndex = curStartIndex;
//       maxEndIndex = i;
//     }
//     if (curSum < 0) {
//       curSum = 0;
//       curStartIndex = i + 1;
//     }
//   }
//   return nums.slice(maxStartIndex, maxEndIndex + 1);
// }

console.log(MaximumSubarrayDP([4, -1, -5, 1000, -99, 1, 5]));
console.log(MaximumSubarrayDP([4, -1, -5, 1000, -99, 1, 100]));
console.log(MaximumSubarrayDP([-1, -2, -3]));
console.log(MaximumSubarrayDP([4, -1, 2, 1]));

export function MaximumSubarrayDP(nums: number[]) {
  const MSArr: number[] = Array(nums.length).fill(0);
  let start = 0;
  let end = nums.length - 1;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    // must include nums[i]
    MSArr[i] = Math.max(0, (MSArr[i - 1] || 0) + nums[i]);
    if (MSArr[i] > max) {
      end = i;
      max = MSArr[i];
    }
    if (MSArr[i] <= 0) {
      start = i + 1;
    }
  }
  return nums.slice(start, end + 1);
}

