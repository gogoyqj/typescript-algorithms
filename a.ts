// f(n) = n * (n - 1) * (n - 2) * ... * 1
function combinationA(numbers: number[]): number[][] {
    const combinations: number[][] = [];
    for (let i = 0; i < numbers.length; i++) {

    }
    return combinations;
}

function combinationC(numbers: number[]) {
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

console.log(combinationC([1, 2, 3, 4]));