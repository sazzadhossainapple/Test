function isPalindrome(number) {
    const numStr = number.toString();

    const reversedStr = numStr.split('').reverse().join('');

    return numStr === reversedStr;
}

// Example usage:
const numberToCheck = 121;
if (isPalindrome(numberToCheck)) {
    console.log(`${numberToCheck} is a palindrome.`);
} else {
    console.log(`${numberToCheck} is not a palindrome.`);
}
