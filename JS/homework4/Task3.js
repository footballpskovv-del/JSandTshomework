//задание 3
function buildChainAll(word, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(word);
    }, ms);
  });
}
Promise.all([
  buildChainAll("Я", 1000),
  buildChainAll("использую", 800),
  buildChainAll("цепочку", 1200),
  buildChainAll("обещаний", 700),
  buildChainAll("параллельно", 500),
]).then((words) => {
  console.log(words.join(" "));
});
