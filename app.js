const PORT = process.env.PORT;
const path = require("path");
const express = require("express");
const favicon = require("serve-favicon");
const app = express();

// expressセッティング
app.set("view engine", "ejs");

app.use(favicon(path.join(__dirname, "/public/favicon.ico")));
// Staticファイルの読み込み
// __dirnameは現在のディレクトリを表す
app.use("/public", express.static(path.join(__dirname, "/public")));

// Dynamicファイルの読み込み
app.use("/", require("./routes/index.js"));

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
