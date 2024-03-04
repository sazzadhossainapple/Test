function maxScore(tokens, power) {
    tokens.sort((a, b) => a - b);

    let score = 0;
    let maxScore = 0;
    let left = 0;
    let right = tokens.length - 1;

    while (left <= right) {
        if (power >= tokens[left]) {
            power -= tokens[left++];
            score++;
            maxScore = Math.max(maxScore, score);
        } else if (score > 0) {
            power += tokens[right--];
            score--;
        } else {
            break;
        }
    }

    return maxScore;
}

// Test cases
console.log(maxScore([100], 50));
console.log(maxScore([200, 100], 150));
console.log(maxScore([100, 200, 300, 400], 200));
