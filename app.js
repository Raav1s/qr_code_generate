const express = require("express");
const path = require("path");
const qr = require("qr-image");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/", (req, res) => {
  const url = req.body.url;
  if (!url) return res.status(400).send("URL обязателен");

  try {
    const qrCode = qr.imageSync(url, { type: "png" });
    res.type("png");
    res.send(qrCode);
  } catch (err) {
    res.status(500).send("Ошибка генерации QR-кода");
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});
