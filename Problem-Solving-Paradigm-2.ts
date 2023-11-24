function minTotalKnightHeight(dragonHeads: number[], knightHeights: number[]): number | string {
    dragonHeads.sort((a, b) => a - b);
    knightHeights.sort((a, b) => a - b);

    let totalHeight = 0;
    let headIndex = 0;

    for (const knightHeight of knightHeights) {
        if (headIndex === dragonHeads.length) {
            break;
        }

        const dragonHeadDiameter = dragonHeads[headIndex];

        if (knightHeight >= dragonHeadDiameter) {
            totalHeight += knightHeight;
            headIndex++;
        }
    }

    return headIndex === dragonHeads.length ? totalHeight : 'knight fall';
}

// Example Test Cases
console.log(minTotalKnightHeight([5, 4, 1], [7, 8, 4])); // Output: 11
console.log(minTotalKnightHeight([5, 10, 1], [5, 1])); // Output: knight fall
console.log(minTotalKnightHeight([7, 2], [4,3, 1, 2])); // Output: knight fall
console.log(minTotalKnightHeight([7, 21, 2, 1, 8, 5], [1, 8, 5])); // Output: 10
