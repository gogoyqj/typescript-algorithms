// The shortest common supersequence (SCS) of two sequences X and Y is the shortest sequence which has X and Y as subsequences.
// supersequence are not required to occupy consecutive positions within the original sequence.
export function ShortestCommonSupersequence(a: string, b: string) {
  const SCSBArr: number[] = Array(b.length).fill(a.length);
  const newA = a.split('');
  let lastMatchCharIndex = -1;
  let matched = 0;
  for (let i = 0; i < b.length; i++) {
    const index = a.substring(lastMatchCharIndex + 1).indexOf(b[i]);
    if (index > -1) {
      lastMatchCharIndex += 1 + index;
      matched++;
    } else {
      let pos = lastMatchCharIndex + i - matched;
      if (pos > -1) {
        newA.splice(pos, 1, newA[pos], b[i]);
      } else {
        newA.unshift(b[i]);
      }
    }
    SCSBArr[i] = (SCSBArr[i - 1] || a.length) + (index > -1 ? 0 : 1);
  }

  return newA.join('');
}

console.log(ShortestCommonSupersequence("Saturday", "Sunsday")); // Satunsrday
console.log(ShortestCommonSupersequence("geek", "eke")); // geeke
console.log(ShortestCommonSupersequence("AGGTAB", "GXTXAYB"));// 'AGXGTXAYB'
console.log(ShortestCommonSupersequence("AGGTAB", "123"));// '123AGGTAB'