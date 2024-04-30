var argumentsLength = function (...args) {
  return args.length;
};

const args = [{}, null, "3"];
console.log(argumentsLength(args));
