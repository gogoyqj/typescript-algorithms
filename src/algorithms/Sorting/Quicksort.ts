export function Quicksort(num: number[]) {
  num = [ ...num ];

  if (num.length <= 1) return num;

  let leftArr: number[] = [];
  let rightArr: number[] = [];
  
  const pivotEle = num.shift()!;
  const centerArr = [pivotEle];
  
  while (num.length) {
    const cur = num.shift()!;
    if (cur === pivotEle) {
      centerArr.push(cur);
    } else if (cur < pivotEle) {
      leftArr.push(cur);
    } else {
      rightArr.push(cur);
    }
  }

  leftArr = Quicksort(leftArr);
  rightArr = Quicksort(rightArr);


  return leftArr.concat(centerArr, rightArr);
}

console.log(Quicksort([7, 8, 9, 10, 2, 2, 4, 5, 2, 1, 8]));