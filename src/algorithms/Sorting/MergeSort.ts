export function MergeSort(num: number[]): number[] {
  if (num.length <= 1) return num;
  const middlePos = Math.floor(num.length / 2);
  const leftArr = num.slice(0, middlePos);
  const rightArr = num.slice(middlePos, num.length);

  const leftSortedArr = MergeSort(leftArr);
  const rightSortedArr = MergeSort(rightArr);
  
  return  MergeAndSortArr(leftSortedArr, rightSortedArr);
}

function MergeAndSortArr(left: number[], right: number[]) {
  let leftIndex = 0;
  let rightIndex = 0;
  const sortedArr: number[] = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      sortedArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      sortedArr.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return sortedArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(MergeSort([9, 8, 4, 5, 7, 3, 6, 5, 1, 2]));
