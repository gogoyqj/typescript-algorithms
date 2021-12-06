// KMP like
// https://www.cxyxiaowu.com/2869.html
export function LongestPalindrome(str: string) {
  if (str.length === 0) return '';
  const bounded = addBoundaries(str);
  const PalindromeArr: number[] = Array(bounded.length).fill(0);
  let maxLen = 0;
  let center = 0;
  let maxRight = 0;
  for (let i = 0; i < bounded.length; i++) {
    // during or cross palindrome
    if (i < maxRight) {
      const mirrorPos = 2 * center - i;
      PalindromeArr[i] = PalindromeArr[mirrorPos] <= maxRight - i ? PalindromeArr[mirrorPos] : maxRight - i;
    }

    let left = i - PalindromeArr[i];
    let right = i + PalindromeArr[i];
    while (left > 0 && right < bounded.length - 1 && bounded[--left] === bounded[++right]) {
      PalindromeArr[i]++;
      if (PalindromeArr[i] > maxLen) {
        maxLen = PalindromeArr[i];
      }
    }

    if (i + PalindromeArr[i] > maxRight) {
      maxRight = i + PalindromeArr[i];
      center = i;
    }
  }
  return PalindromeArr.reduce<string[]>((palindrome, len, radius) => {
    if (len === maxLen) {
      palindrome.push(str.slice((radius - 1) / 2 - maxLen / 2 + 1, (radius - 1) / 2 + maxLen / 2 + 1));
    }
    return palindrome;
  }, []);
}

export function addBoundaries(str: string, divider = '#') {
  let newString = divider;
  for (let i = 0; i < str.length; i++) {
    newString = newString + str[i] + divider;
  }
  return newString;
}

console.log(LongestPalindrome('babbaefefe'));
console.log(LongestPalindrome('babbaeffe'));
console.log(LongestPalindrome('jkcbabckjioijkcbabee'));
