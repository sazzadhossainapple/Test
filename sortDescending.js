function sortDescending(arr) {
  return arr.sort(function (a, b) {
    return b - a;
  });
}

// Example usage:
let array2 = [5, 3, 8, 1, 2];
let sortedDescending = sortDescending(array2);
console.log(sortedDescending);
