function ZAlgorithm(zString: string) {
  const zArray: number[] = Array(zString.length).fill(-1);
  let zBoxLeft = 0;
  let zBoxRight = 0;
  let zBoxShift = 0;
  for (let i = 1; i < zString.length; i++) {
    if (i > zBoxRight) {
      zBoxLeft = zBoxRight = i;
      // zBoxRight - i 更好理解
      // zBoxRight - i === zBoxRight - zBoxLeft
      while (zBoxRight < zString.length && zString[zBoxRight] === zString[zBoxRight - zBoxLeft]) {
        zBoxRight++;
      }
      zArray[i] = zBoxRight - zBoxLeft;
      zBoxRight = zBoxRight - 1;
    } else {
      zBoxShift = i - zBoxLeft;
      if (zArray[zBoxShift] < (zBoxRight - i) + 1) {
        zArray[i] = zArray[zBoxShift];
      } else {
        zBoxLeft = i;
        while (zBoxRight < zString.length && zString[zBoxRight] === zString[zBoxRight - zBoxLeft]) {
          zBoxRight++;
        }
        zArray[i] = zBoxRight - zBoxLeft;
        zBoxRight = zBoxRight - 1;
      }
    }
  }
  return zArray;
}

console.log(ZAlgorithm('123fg12fh123fg'));
console.log(ZAlgorithm('1111111'))