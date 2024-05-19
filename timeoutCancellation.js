var cancellable = function (fn, args, t) {
  let timeOut = setTimeout(() => {
    const result = fn(...args);
    console.log(result);
  }, t);

  return function () {
    clearTimeout(timeOut);
  };
};

const fn = (x) => x * 5;
const args = [2];
const t = 20;
const cancelTimeMs = 50;
const cancelFn = cancellable(fn, args, t);
setTimeout(cancelFn, cancelTimeMs);
