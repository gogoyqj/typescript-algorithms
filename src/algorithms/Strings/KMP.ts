// KMP
export function KMP(text: string, word: string): number {
  if (word.length === 0) return 0;
  let textIndex = 0;
  let wordIndex = 0;

  const next = getNext(word);

  while (textIndex < text.length) {
    if (text[textIndex] === word[wordIndex]) {
      textIndex++;
      wordIndex++;
      if (wordIndex === word.length) return textIndex - word.length;
    } else if (wordIndex > 0){
      wordIndex = next[wordIndex - 1];
    } else {
      textIndex++;
      wordIndex = 0;
    }
  }
 
  return -1;
}

export function getNext(word: string) {
  const next = [0];
  let start = 0;
  let index = 1;
  while (index < word.length) {
    if (word[index] === word[start]) {
      next[index] = start + 1;
      start++;
      index++;
    } else if (start > 0) {
      // ababxxxabac => 00120001230
      start = next[start - 1];
    } else {
      next[index] = 0;
      index++;
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

