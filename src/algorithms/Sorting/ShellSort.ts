console.log(ShellSort([4, 5, 3, 7, 8, 2, 4, 3, 48, 10, 2]));

export function ShellSort(arr: number[]) {
  arr = [ ...arr ];
  let gap = Math.floor(arr.length / 2);

  while (gap > 0) {
    for (let i = 0; i < arr.length - gap; i++) {
      let index = i;
      let indexShift = i + gap;
      while (index >= 0) {
        if (arr[index] > arr[indexShift]) {
          const min = arr[indexShift];
          arr[indexShift] = arr[index];
          arr[index] = min;
        }
        indexShift = index;
        index -= gap;
      }
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
}