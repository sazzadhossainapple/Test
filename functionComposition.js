const compose = function (functions) {
  if (functions.length === 0) {
    return function (x) {
      return x;
    };
  } else {
    return function (x) {
      let result = x;
      for (let i = functions.length - 1; i >= 0; i--) {
        result = functions[i](result);
      }
      return result;
    };
  }
};

const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
const output = compose(functions);
const x = 4;
console.log(output(x));
