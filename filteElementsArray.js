const filter = function (arr, fn) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            output.push(arr[i]);
        }
    }
    return output;
};

const arr = [0, 10, 20, 30];
const fn = function greaterThan10(n) {
    return n > 10;
};
const newArray = filter(arr, fn);
console.log(newArray);
