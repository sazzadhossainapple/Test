// const palindrome = (s) => {
//     let reverse = s.split('').reverse().join('');
//     return s === reverse;
// };

// const longestPalindrome = (s) => {
//     let maxLength = 0,
//         max = '';
//     for (let i = 0; i < s.length; i++) {
//         const subs = s.substr(i, s.length);
//         for (let j = subs.length; j >= 0; j--) {
//             const subStr = subs.substr(0, j);
//             if (subStr.length <= 1) continue;
//             if (palindrome(subStr)) {
//                 if (subStr.length > maxLength) {
//                     maxLength = subStr.length;
//                     max = subStr;
//                 }
//             }
//         }
//     }

//     return max;
// };
// console.log(longestPalindrome('cbbd'));
// console.log(longestPalindrome('bababababdaba'));

function longestPalindrome(s) {
    if (s.length <= 1) {
        return s;
    }

    let start = 0;
    let maxLength = 1;

    // Create a 2D array to store the results of subproblems
    let dp = Array.from({ length: s.length }, () =>
        Array(s.length).fill(false)
    );

    // All substrings of length 1 are palindromes
    for (let i = 0; i < s.length; i++) {
        dp[i][i] = true;
    }

    // Check substrings of length 2
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            start = i;
            maxLength = 2;
        }
    }

    // Check substrings of length 3 or more
    for (let len = 3; len <= s.length; len++) {
        for (let i = 0; i <= s.length - len; i++) {
            let j = i + len - 1; // Ending index of substring

            if (dp[i + 1][j - 1] && s[i] === s[j]) {
                dp[i][j] = true;
                start = i;
                maxLength = len;
            }
        }
    }

    return s.substr(start, maxLength);
}

// Example usage:
let inputString = 'babad';
let result = longestPalindrome(inputString);
console.log(result); // Output: "bab" or "aba"
