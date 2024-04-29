const map = function (arr, fn) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i], i));
    }

    return newArr;
};

const arr = [1, 2, 3];
const plusone = function plusone(n) {
    return n + 1;
};
const newArray = map(arr, plusone);
console.log(newArray);
