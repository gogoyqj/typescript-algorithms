// KMP
export function KMP(text: string, word: string) {
  if (word.length === 0) return 0;
  let wordIndex = 0;
  let textIndex = 0;

  const shitArr = getNext(word);

  while (textIndex < text.length) {
    if (text[textIndex] === word[wordIndex]) {
      if (wordIndex === word.length - 1) {
        return textIndex - wordIndex;
      }
      textIndex++;
      wordIndex++;
    } else {
      const shit = shitArr[wordIndex];
      if (shit < 0) {
        textIndex++;
        wordIndex = 0;
      } else {
        wordIndex = shit;
      }
    }
  }

  return -1;
}

export function getNext(word: string) {
  const next: number[] = [-1];
  let prevIndex = 0;
  let nextIndex = 1;

  while (nextIndex < word.length) {
    if (word[prevIndex] === word[nextIndex]) {
      next[nextIndex] = next[prevIndex];
      nextIndex++;
      prevIndex++;
    } else {
      next[nextIndex] = prevIndex > 0 ? nextIndex - prevIndex - 1 : next[prevIndex] + 1;
      nextIndex++;
    }
  }
  return next;
}
console.log(KMP('', ''));
console.log(KMP('a', ''));
console.log(KMP('a', 'a'));
console.log(KMP('abcbcglx', 'abca'));
console.log(KMP('abcbcglx', 'bcgl'));
console.log(KMP('abcxabcdabxabcdabcdabcy', 'abcdabcy'));
console.log(KMP('abcxabcdabxabcdabcdabcy', 'abcdabca'));
console.log(KMP('abcxabcdabxaabcdabcabcdabcdabcy', 'abcdabca'));
console.log(KMP('abcxabcdabxaabaabaaaabcdabcdabcy', 'aabaabaaa'));
