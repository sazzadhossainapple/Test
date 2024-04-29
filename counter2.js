function createCounter(init) {
    let count = init;

    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        reset: function () {
            count = init;
            return count;
        },
    };
}

// Test cases
console.log(createCounter(5).increment()); // Output: 6
console.log(createCounter(5).reset()); // Output: 5
console.log(createCounter(5).decrement()); // Output: 4

console.log(createCounter(0).increment()); // Output: 1
console.log(createCounter(0).increment()); // Output: 2
console.log(createCounter(0).decrement()); // Output: 1
console.log(createCounter(0).reset()); // Output: 0
console.log(createCounter(0).reset()); // Output: 0
