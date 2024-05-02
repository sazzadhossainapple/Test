function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (!cache.has(key)) {
      cache.set(key, fn(...args));
    }
    return cache.get(key);
  };
}

function sum(a, b) {
  return a + b;
}

function fib(n) {
  if (n <= 1) {
    return 1;
  }
  return memoFib(n - 1) + memoFib(n - 2);
}

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return memoFactorial(n - 1) * n;
}

const memoSum = memoize(sum);
const memoFib = memoize(fib);
const memoFactorial = memoize(factorial);

function solve(fnName, actions, values) {
  const result = [];
  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const value = values[i];
    if (action === "call") {
      let res;
      switch (fnName) {
        case "sum":
          res = memoSum(...value);
          break;
        case "fib":
          res = memoFib(...value);
          break;
        case "factorial":
          res = memoFactorial(...value);
          break;
      }
      result.push(res);
    } else if (action === "getCallCount") {
      let count;
      switch (fnName) {
        case "sum":
          count = memoSum.callCount || 0;
          break;
        case "fib":
          count = memoFib.callCount || 0;
          break;
        case "factorial":
          count = memoFactorial.callCount || 0;
          break;
      }
      result.push(count);
    }
  }
  return result;
}

// Example usage:
const fnName = "factorial";
const actions = [
  "call",
  "call",
  "call",
  "getCallCount",
  "call",
  "getCallCount",
];
const values = [[2], [3], [2], [], [3], []];
console.log(solve(fnName, actions, values));
