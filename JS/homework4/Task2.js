// задание 2
function buildChain() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Я");
    }, 1000);
  })
    .then((text) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(text + " использую");
        }, 1000);
      });
    })
    .then((text) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(text + " цепочки");
        }, 1000);
      });
    })
    .then((text) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(text + " обещаний");
        }, 1000);
      });
    });
}
buildChain().then((result) => {
  console.log(result);
});
