export function JumpGreedy(nums: number[]) {
  let leftGoodPos = nums.length - 1;
  for (let pos = nums.length - 2; pos >= 0; pos--) {
    const maxCurrentJump = pos + nums[pos];
    if (maxCurrentJump >= leftGoodPos) {
      leftGoodPos = pos;
    }
  }
  return leftGoodPos === 0;
}

console.log(JumpGreedy([3, 2, 1, 0, 4]));
console.log(JumpGreedy([3, 2, 1, 1, 4]));
console.log(JumpGreedy([0, 3, 2, 1, 1, 4]));