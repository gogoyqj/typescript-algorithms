// f(n) = n * (n - 1) * (n - 2) * ... * 1
export function combinationA(numbers: number[]): number[][] {
  const len = numbers.length;
  const combinations: number[][] = [];
  for (let i = 0; i < len; i++) {
    const current = numbers.slice(0, i + 1);
    combinations.push([...current]);
    for (let j = 0; j < current.length; j++) {
      for (let k = j + 1; k < numbers.length; k++) {
        current[j] = numbers[k];
      }
    }
    combinations.push([...current]);
  }
  return combinations;
}

// console.log(combinationA([]).length);
// console.log(combinationA([1]).length);
// console.log(combinationA([1, 2]).length);
console.log(combinationA([1, 2, 3]));
// console.log(combinationA([1, 2, 3, 4]));