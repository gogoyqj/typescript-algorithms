function LongestCommonSequece(a: string, b: string): string[] {
  const rowLen = a.length + 1;
  const columnLen = b.length + 1;
  const Arr: number[][] = new Array(rowLen)
    .fill(null)
    .map(() => new Array(columnLen).fill(null));
  let maxLen = 0;
  let MaxPos: number[] = [0, 0];
  const seq: string[] = [];

  for (let row = 0; row < rowLen; row++) {
    Arr[row][0] = 0;
  }

  for (let column = 0; column < columnLen; column++) {
    Arr[0][column] = 0;
  }

  for (let column = 1; column < columnLen; column++) {
    for (let row = 1; row < rowLen; row++) {
      Arr[row][column] =
        a[row - 1] === b[column - 1]
          ? Arr[row - 1][column - 1] + 1
          : Math.max(Arr[row - 1][column], Arr[row][column - 1]);
      if (Arr[row][column] > maxLen) {
        maxLen = Arr[row][column];
        MaxPos = [row, column];
      }
    }
  }

  if (maxLen === 0) return seq;

  let [row, column] = MaxPos;
  while (row > 0 || column > 0) {
    if (a[row - 1] === b[column - 1]) {
      seq.unshift(b[column - 1]);
      row--;
      column--;
    } else if (Arr[row][column] === Arr[row - 1][column]) {
      row--;
    } else if (Arr[row][column] === Arr[row][column - 1]) {
      column--;
    }
  }
  return seq;
}


export function ShortestCommonSupersequence(a: string, b: string) {
  const LongestCommonSeq = LongestCommonSequece(a, b);
  const len = LongestCommonSeq.length;
  if (!len) return a.concat(b);
  const newSeq: string[] = [...LongestCommonSeq];
  let index = 0;
  let aCopy = a;
  let bCopy = b;
  while (index < len) {
    const char = LongestCommonSeq[index];
    const aIndex = aCopy.indexOf(char);
    if (aIndex > 0) {
      newSeq.splice(
        index,
        1,
        `${aCopy.substring(0, aIndex)}${newSeq[index]}`
      );
    }
    aCopy = aCopy.substring(aIndex + 1);

    const bIndex = bCopy.indexOf(char);
    if (bIndex > 0) {
      newSeq.splice(
        index,
        1,
        `${bCopy.substring(0, bIndex)}${newSeq[index]}`
      );
    }
    bCopy = bCopy.substring(bIndex + 1);
    index++;
  }
  if (aCopy.length) {
    newSeq.push(aCopy);
  }
  if (bCopy.length) {
    newSeq.push(bCopy);
  }
  return newSeq.join("");
}

console.log(ShortestCommonSupersequence("Saturday", "Sunsday")); // Satunsrday
console.log(ShortestCommonSupersequence("geek", "eke")); // geeke
console.log(ShortestCommonSupersequence("AGGTAB", "GXTXAYB"));// 'AGXGTXAYB'
console.log(ShortestCommonSupersequence("AGGTAB", "123"));// 'AGGTAB123'