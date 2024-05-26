var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      fn(...args)
        .then((result) => {
          clearTimeout(timer);
          resolve(result);
        })
        .catch((err) => {
          clearTimeout(timer);
          reject(err);
        });
    });
  };
};

// Example usage
const fn = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};

const inputs = [5];
const t = 150;

const limitedFn = timeLimit(fn, t);

limitedFn(...inputs)
  .then((result) => {
    console.log({ resolved: result, time: t });
  })
  .catch((error) => {
    console.log({ rejected: error, time: t });
  });
