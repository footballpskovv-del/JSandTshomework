// задание 4
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
delay(2000).then(() => console.log("Это сообщение вывелось через 2 секунды"));
