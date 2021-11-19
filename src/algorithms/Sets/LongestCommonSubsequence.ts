export function LongestCommonSubsequence(a: string, b: string) {
  const matrix: number[][] = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));
  // init first row
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[0][i] = 0;
  }
  // init first column
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][0] = 0;
  }

  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      if (b[j - 1] === a[i - 1]) {
        matrix[j][i] = matrix[j - 1][i - 1] + 1;
      } else {
        matrix[j][i] = Math.max(
          matrix[j - 1][i],
          matrix[j][i - 1]
        )
      }
    }
  }
  console.log(matrix.map(arr => arr.join(' ')).join('\n'))
  if (!matrix[b.length][a.length]) return [''];
  let rowIndex = 1;
  let columnIndex = 1;
  const Subsequence: string[] = [];
  while (rowIndex < b.length || columnIndex < a.length) {
    if (b[rowIndex + 1] === a[columnIndex + 1]) {
      console.log(22, rowIndex, b[rowIndex + 1]);
      Subsequence.push(b[rowIndex + 1]);
      rowIndex++;
      columnIndex++;
    } else if (matrix[rowIndex][columnIndex] = matrix[rowIndex][columnIndex + 1] - 1) {
      columnIndex++;
    } else {
      rowIndex++;
    }
  }
  return Subsequence;
}


console.log(LongestCommonSubsequence('Saturday', 'Sunday'));
// console.log(LongestCommonSubsequence('S', 'A'));
// console.log(LongestCommonSubsequence('S', 'SA'));