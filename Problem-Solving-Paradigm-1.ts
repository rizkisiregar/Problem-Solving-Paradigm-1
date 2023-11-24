function solveEquations(A: number, B: number, C: number): [number, number, number] | null {
    for (let x = -1000; x <= 1000; x++) {
        for (let y = -1000; y <= 1000; y++) {
            for (let z = -1000; z <= 1000; z++) {
                if (x + y + z === A && x * y * z === B && x**2 + y**2 + z**2 === C) {
                    return [x, y, z];
                }
            }
        }
    }
    return null;
}

// Example usage
const input1 = solveEquations(1, 2, 3);
const input2 = solveEquations(6, 6, 14);

console.log("Input: 1 2 3");
console.log("Output:", input1 ? input1.join(" ") : "No solution");
console.log("\nInput: 6 6 14");
console.log("Output:", input2 ? input2.join(" ") : "No solution");
