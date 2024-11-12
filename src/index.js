const express = require("express");
const app = express();
const path = require("path");

// ポート設定
const PORT = process.env.PORT || 3000;

// 静的ファイル（HTMLやCSSなど）のフォルダを設定
app.use(express.static(path.join(__dirname, "public")));

// ルーティング設定
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "/about.html"));
});

app.get("/portfolio", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "/portfolio.html"));
});

app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "/services.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
