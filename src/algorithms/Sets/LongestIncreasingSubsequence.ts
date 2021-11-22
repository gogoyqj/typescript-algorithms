export function LongestIncreasingSubsequence(sequence: number[]) {
  const sequenceArr: number[] = Array(sequence.length).fill(1);
  let prevSequenceIndex = 0;
  for (let index = 1; index < sequence.length; index++) {
    for (prevSequenceIndex = 0; prevSequenceIndex < index; prevSequenceIndex++) {
      if (sequence[index] >= sequence[prevSequenceIndex]) {
        if (sequenceArr[prevSequenceIndex] + 1 > sequenceArr[index]) sequenceArr[index] = sequenceArr[prevSequenceIndex] + 1;
      }
    }
  }
  return sequenceArr.reduce((len, cur) => (cur > len ? cur : len), 0);
}

console.log(LongestIncreasingSubsequence([1, 2, 3, 4, 1, 5, 3, 6]));
console.log(LongestIncreasingSubsequence([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]));

