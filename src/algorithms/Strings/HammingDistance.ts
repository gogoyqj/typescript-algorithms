// Hamming Distance - number of positions at which the symbols are different
export function HammingDistance(a: string, b: string) {
  let distance = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) distance++;
  }
  return distance;
}

console.log(HammingDistance("karolin", "kathrin"));