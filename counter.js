function createCounter(initialValue) {
    return function () {
        return initialValue++;
    };
}

function testCounter(n, calls) {
    const counter = createCounter(n);
    const result = [];

    for (let i = 0; i < calls.length; i++) {
        if (calls[i] === 'call') {
            result.push(counter());
        }
    }

    return result;
}

// Test cases
console.log(testCounter(10, ['call', 'call', 'call']));
console.log(testCounter(-2, ['call', 'call', 'call', 'call', 'call']));
