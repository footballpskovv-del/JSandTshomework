const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
app.post("/echo", (req, res) => {
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log("Сервер запущен на http://localhost:3000");
});
