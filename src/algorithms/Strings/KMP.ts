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
    } else if (prevIndex) {
      next[nextIndex] = word[nextIndex - 1] === word[nextIndex] ? next[nextIndex -1] : nextIndex - prevIndex - 1;
      nextIndex++;
    } else {
      next[nextIndex] = next[prevIndex] + 1;
      nextIndex++;
    }
  }
  return next;
}
console.log(KMP('', '') === 0);
console.log(KMP('a', '') === 0);
console.log(KMP('a', 'a') === 0);
console.log(KMP('abcbcglx', 'abca') === -1);
console.log(KMP('abcbcglx', 'bcgl') === 3);
console.log(KMP('abcxabcdabxabcdabcdabcy', 'abcdabcy') === 15);
console.log(KMP('abcxabcdabxabcdabcdabcy', 'abcdabca') === -1);
console.log(KMP('abcxabcdabxaabcdabcabcdabcdabcy', 'abcdabca') === 12);
console.log(KMP('abcxabcdabxaabaabaaaabcdabcdabcy', 'aabaabaaa') === 11);
console.log(KMP('aababb', 'aabb') === -1)
console.log(KMP('aabbabc', 'aabbab') === 0)

