export function SelectionSort(num: number[]) {
  num = [...num];

  for (let i = 0; i < num.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < num.length; j++) {
      if (num[j] < num[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [
        num[i],
        num[minIndex]
      ] = [
          num[minIndex],
          num[i]
        ]
    }
  }
  return num;
}

console.log(SelectionSort([9, 6, 8, 7, 5, 4, 2, 3, 1]));