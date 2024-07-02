function sortAndGetLowest(arr) {
  if (arr.length === 0) {
    return null;
  }

  arr.sort(function (a, b) {
    return a - b;
  });

  return arr[0];
}

// Example usage:
let array = [5, 3, 8, 0, 1, -5, 2];
let lowestValue = sortAndGetLowest(array);
console.log(lowestValue);
