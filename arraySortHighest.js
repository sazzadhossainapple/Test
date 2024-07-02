function sortAndGetHighest(arr) {
  if (arr.length === 0) {
    return null;
  }

  arr.sort(function (a, b) {
    return a - b;
  });

  return arr[arr.length - 1];
}

// Example usage:
let array = [5, 3, 0, 8, 1, 2];
let highestValue = sortAndGetHighest(array);
console.log(highestValue);
