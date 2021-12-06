export function LongestUnduplicatedSubstring(str: string) {
  if (!str.length) return '';
  if (str.length === 1) return str;
  let maxLen = 1;
  let map = new Map<string, number>();
  let i = 0;
  let j = 0;
  for (; j < str.length; j++) {
    const char = str[j];
    if (map.has(char)) {
      i = Math.max(map.get(char)! + 1, i);
    } else {
      map.set(char, j);
    }
    if (j - i + 1 > maxLen) {
      maxLen = j - i + 1;
    }
  }
  return str.substring(i, i + maxLen);
}

console.log(LongestUnduplicatedSubstring('abcaefbceghkfe'));