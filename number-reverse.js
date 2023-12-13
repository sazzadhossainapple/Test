function reverse(x) {
    const max_int = Math.pow(2, 31) - 1;
    const min_int = -Math.pow(2, 31);

    let strX = Math.abs(x).toString();
    let reverseStr = strX.split('').reverse().join('');
    let reverseInt = parseInt(reverseStr) * Math.sign(x);

    if (reverseInt > max_int || reverseInt < min_int) {
        return 0;
    }
    return reverseInt;
}
console.log(reverse(-123));
