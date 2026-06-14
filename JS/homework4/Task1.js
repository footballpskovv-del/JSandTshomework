// задание 1
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Task 1", isDone: false },
        { id: 2, title: "Task 2", isDone: true },
        // закоментировать выше, раскоментировать ниже:
        // reject("Сервер не отвечает"),
      ]);

      // Чтобы проверить ошибку, закомментируйте resolve выше
      // и раскомментируйте строку ниже:
      // reject("Ошибка получения списка задач");
    }, 2000);
  });
}

getList()
  .then((tasks) => {
    console.log("Список задач:");

    tasks.forEach((task) => {
      console.log(
        `${task.id}. ${task.title} — ${task.isDone ? "готово" : "не готово"}`,
      );
    });
  })
  .catch((error) => {
    console.log("Произошла ошибка:", error);
  });
