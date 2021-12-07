export function InsertionSort(num: number[]) {
  num = [...num];

  for (let i = 0; i < num.length; i++) { // n
    let cur = i;
    while (num[cur - 1] !== undefined && num[cur] < num[cur - 1]) {// 1 或者 n
      [
        num[cur - 1],
        num[cur]
      ] = [
        num[cur],
        num[cur -1 ]
      ]
      cur--;
    }
  }

  return num;
}

console.log(InsertionSort([4, 5, 3, 7, 8, 2, 4, 3, 48, 10, 2]));