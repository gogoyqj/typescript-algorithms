export function CombinationsWithRepetition(numbers: number[], len = numbers.length) {
    if (len === 1) return numbers.map(num => [num]);
    const combinations: number[][] = [];
    for (let i = 0; i < numbers.length; i++) {
        const subCombinations = CombinationsWithRepetition(numbers.slice(i), len - 1);
        subCombinations.forEach((combo) => {
            combinations.push([numbers[i]].concat(combo));
        });
    }
    return combinations;
}

console.log(CombinationsWithRepetition([1, 2, 3]))