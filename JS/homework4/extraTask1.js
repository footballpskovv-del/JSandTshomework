// доп. задание 1
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
function getWord(word, ms) {
  return delay(ms).then(() => {
    return word;
  });
}
Promise.all([
  getWord("Я", 1000),
  getWord("использую", 800),
  getWord("вызов", 1200),
  getWord("обещаний", 700),
  getWord("параллельно", 500),
]).then((words) => {
  console.log(words.join(" "));
});
