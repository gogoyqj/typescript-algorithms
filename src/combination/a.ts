// 排列组合、顺序敏感
// a(n) = n * (n - 1) * (n - 2) * ... * 1 
// f(n) = a(n) + n * f(n - 1)
function combinationA(numbers: number[]): number[][] {
  const combinations: number[][] = [];
  if (numbers.length === 0) return [];
  if (numbers.length === 1) return [numbers];
  for (let i = 0; i < numbers.length; i++) {
    const copy = [...numbers];
    copy.splice(i, 1);
    const combinationsNMinuseOne = combinationA(copy);
    combinationsNMinuseOne.forEach((ele) => {
      combinations.push(ele);
      if (ele.length === numbers.length - 1) {
        combinations.push([numbers[i], ...ele]);
      }
    });
  }
  return combinations;
}

console.log(combinationA([1, 2]).length, FN(2));
console.log(combinationA([1, 2, 3, 4]).length, FN(4));
console.log(combinationA([1, 2, 3, 4, 5]).length, FN(5));

function AN(n: number): number {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 2;
  return n * AN(n - 1);
}

function FN(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return AN(n) + n * FN(n - 1)
}