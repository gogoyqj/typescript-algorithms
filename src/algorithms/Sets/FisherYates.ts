export function FisherYates(arr: any[]) {
  const newArr = [...arr];
  for (let i = arr.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[randomIndex]] = [newArr[randomIndex], newArr[i]];
  }
  return newArr;
}

console.log(FisherYates(['skipper', 'kowalski', 'rico', 'private']));