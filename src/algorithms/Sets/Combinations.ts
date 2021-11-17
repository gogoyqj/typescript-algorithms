/**
 * @description 排列组合，顺序无关，使用二进制
 */
function combinationsWithoutRepetition(numbers: number[]) {
    let max = (2 << numbers.length - 1) - 1;
    const combinations: number[][] = [];
    while (max > 0) {
        const n = max.toString(2).split('');
        combinations.push(n.reduce<number[]>((cur, i, index) => {
            if (i === '1') {
                cur.push(numbers[n.length - 1 - index]);
            }
            return cur;
        }, []));
        max--;
    }
    return combinations;
}

console.log(combinationsWithoutRepetition([1, 2, 3, 4]));