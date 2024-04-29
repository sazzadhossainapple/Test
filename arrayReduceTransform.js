var reduce = function (nums, fn, init) {
    let val = init;

    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
};

const nums = [1, 2, 3, 4];
const fn = function sum(accum, curr) {
    return accum + curr;
};
const init = 0;
console.log(reduce(nums, fn, init));
