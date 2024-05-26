var cancellable = function (fn, args, t) {
  const results = [];
  let startTime = Date.now();

  const recordExecution = () => {
    let currentTime = Date.now() - startTime;
    let result = fn(...args);
    results.push({ time: currentTime, returned: result });
  };

  recordExecution();

  let timer = setInterval(recordExecution, t);

  let cancelFn = () => {
    clearInterval(timer);
    return results;
  };

  return cancelFn;
};

const fn = (x) => x * 2;
const args = [6];
const t = 35;

const cancel = cancellable(fn, args, t);

setTimeout(() => {
  const results = cancel();
  console.log(results);
}, 200);
