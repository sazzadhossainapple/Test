// function checkPrime(num) {
//   let i,
//     flag = true;
//   for (i = 2; i <= num - 1; i++) {
//     if (num % i == 0) {
//       flag = false;
//       break;
//     }
//   }
//   if (flag == true) console.log(num + " is prime");
//   else console.log(num + " is not prime");
// }
// checkPrime(4);
// checkPrime(5);

function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime numbers
  if (num <= 3) return true; // 2 and 3 are prime numbers

  // Check for divisibility by 2 or 3
  if (num % 2 === 0 || num % 3 === 0) return false;

  // Check for divisibility by all numbers up to the square root of num
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

function getPrimes(arr) {
  return arr.filter(isPrime);
}

// Example usage:
let array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let primes = getPrimes(array);
console.log(primes);
