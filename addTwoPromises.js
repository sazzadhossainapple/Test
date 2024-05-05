var addTwoPromises = async function (promise1, promise2) {
  return (await promise1) + (await promise2);
};

const promise1 = new Promise((resolve) => setTimeout(() => resolve(5), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 60));

async function getResult() {
  const output = await addTwoPromises(promise1, promise2);
  console.log(output);
}

getResult();
