function isMatch(s, p) {
    // Create a 2D array dp with dimensions (s.length + 1) x (p.length + 1)
    const dp = Array.from({ length: s.length + 1 }, () =>
        Array(p.length + 1).fill(false)
    );

    // Set dp[0][0] to true since an empty string matches an empty pattern
    dp[0][0] = true;

    // Handle patterns with '*' at the beginning (zero or more of the preceding element)
    for (let j = 1; j <= p.length; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }

    // Build the dp array using dynamic programming
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            // If current characters match or pattern has a '.', set dp[i][j] to dp[i-1][j-1]
            if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                // If pattern has '*', check for zero occurrences or match with previous character
                dp[i][j] =
                    dp[i][j - 2] ||
                    (dp[i - 1][j] &&
                        (s[i - 1] === p[j - 2] || p[j - 2] === '.'));
            }
        }
    }

    // Return whether the entire string matches the entire pattern
    return dp[s.length][p.length];
}

// Test cases
console.log(isMatch('aa', 'a')); // Output: false
console.log(isMatch('aa', 'a*')); // Output: true
console.log(isMatch('ab', '.*')); // Output: true
