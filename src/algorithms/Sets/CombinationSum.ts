export function CombinationSum(candidates: number[], target: number) {
  const candidatesArr: number[][] = [];
  for (let i = 0; i < candidates.length; i++) {
    const row: number[] = [];
    if (target > candidates[i]) {
      row.push(candidates[i]);
      const subCandidatesArr = CombinationSum(candidates.slice(i), target - candidates[i]);
      subCandidatesArr.forEach(sub => {
        candidatesArr.push(row.concat(sub));
      });
    } else if (target === candidates[i]) {
      row.push(candidates[i]);
      candidatesArr.push(row);
      break;
    }
  }
  return candidatesArr;
}

console.log(CombinationSum([2, 3], 6));
console.log(CombinationSum([2, 3, 6, 7], 7));
console.log(CombinationSum([2, 3, 5], 8));