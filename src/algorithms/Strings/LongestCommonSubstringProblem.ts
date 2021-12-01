// The longest common substring problem is to find the longest string (or strings) that is a substring (or are substrings) of two or more strings.
// LCS(n) = 
export function LongestCommonSubstringProblem(a: string, b: string) {
  const colunmLen = b.length + 1;
  const rowLen = a.length + 1;
  const matrix = Array(rowLen).fill(null).map(() => Array(colunmLen).fill(null));

  // init first row 0
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[0][i] = 0;
  }

  // init first column 0
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][0] = 0;
  }

  let max = 0;

  for (let columnIndex = 1; columnIndex < colunmLen; columnIndex++) {
    for (let rowIndex = 1; rowIndex < rowLen; rowIndex++) {
      matrix[rowIndex][columnIndex] = a[rowIndex - 1] === b[columnIndex - 1] ? matrix[rowIndex - 1][columnIndex - 1] + 1 : 0;
      max = Math.max(max, matrix[rowIndex][columnIndex]);
    }
  }

  return matrix.reduce((all, row) => {
    row.forEach((len, index) => {
      if (len === max) {
        all.push(b.slice(index - len, index));
      }
    });
    return all;
  }, []);

}

console.log(LongestCommonSubstringProblem('ABABC', 'BABCA'));
console.log(LongestCommonSubstringProblem('ABABC', 'BABA'));