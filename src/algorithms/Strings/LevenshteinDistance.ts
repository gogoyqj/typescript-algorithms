// lev[a,b](i, j) = max(i, j) if min(i, j) = 0
//                = min( lev(i - 1, j) + 1, lev(i, j - 1) + 1, lev(i - 1, j - 1) + 1(ai != bj) )
export function LevenshteinDistance(a: string, b: string) {
  const matrix: number[][] = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));
  // init first row
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[0][i] = i;
  }
  // init first column
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][0] = i;
  }

  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      const indicator = b[j - 1] === a[i - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j - 1][i] + 1,
        matrix[j][i - 1] + 1,
        matrix[j - 1][i - 1] + indicator
      );
    }
  }
  return matrix;
}

console.log(LevenshteinDistance('Saturday', 'Sunday'));
console.log(LevenshteinDistance('S', 'A'));
console.log(LevenshteinDistance('S', 'SA'));