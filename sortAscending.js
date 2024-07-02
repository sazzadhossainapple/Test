function sortAscending(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

// Example usage:
let array1 = [5, 3, 8, 1, 2];
let sortedAscending = sortAscending(array1);
console.log(sortedAscending);
