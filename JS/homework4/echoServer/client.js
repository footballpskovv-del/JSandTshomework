async function sendEcho() {
  const response = await fetch("http://localhost:3000/echo", {
    method: "POST",
    headers: {
      "Content-type": "application/Json",
    },
    body: JSON.stringify({
      massage: "Привет сервис, я жду от тебя ответа",
    }),
  });
  const data = await response.json();
  console.log(data);
}
sendEcho();
