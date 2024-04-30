var once = function (fn) {
  let hasBeenCalled = false;
  let result;

  return function () {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = fn.apply(this, arguments);
      return result;
    } else {
      return undefined;
    }
  };
};

const fn = (a, b, c) => a + b + c,
  calls = [
    [1, 2, 3],
    [2, 3, 6],
  ];

const onceFn = once(fn);

calls.forEach((args) => {
  console.log(onceFn(...args));
});
