export function LongestCommonSubsequence(a: string, b: string) {
  const LCS: string[] = [];
  let i = 0;
  let j = 0;
  for (; i < a.length; i++) {
    for (; j < b.length; j++) {
      if (a[i] === b[j]) {
        LCS.push(a[i]);
        j++;
        break;
      }
    } 
  }
  return LCS;
}