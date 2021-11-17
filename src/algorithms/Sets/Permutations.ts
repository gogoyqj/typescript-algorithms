// 排列组合、顺序敏感
// f(n) = a(n, n) + a(n, n - 1) + ... + a(n, 1) 
// f(n) = n * (f(n - 1) + 1)
function PermutationsWithoutRepetition(numbers: number[]): number[][] {
  const combinations: number[][] = [];
  if (numbers.length === 0) return [];
  if (numbers.length === 1) return [numbers];
  for (let i = 0; i < numbers.length; i++) {
    const copy = [...numbers];
    combinations.push(copy.splice(i, 1));
    const combinationsNMinuseOne = PermutationsWithoutRepetition(copy);
    combinationsNMinuseOne.forEach((ele) => {
      combinations.push([numbers[i], ...ele]);
    });
  }
  return combinations;
}

console.log(PermutationsWithoutRepetition([1, 2, 3]).length, FN(3), FN2(3));
console.log(PermutationsWithoutRepetition([1, 2, 3, 4]).length, FN(4), FN2(4));
console.log(PermutationsWithoutRepetition([1, 2, 3, 4, 5]).length, FN(5), FN2(5));

function CalA(n: number, m: number): number {
  if (m > n) throw Error(`${m} > ${n}`);
  if (n === 0) return 1;
  let cnt = 1;
  for (let i = n; i > n - m; i--) {
    cnt *= i;
  }
  return cnt;
}

function FN(n: number) {
  let cnt = 0;
  for (let i = n; i > 0; i--) {
    cnt += CalA(n, i);
  }
  return cnt;
}

function FN2(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return n * (FN2(n - 1) + 1);
}