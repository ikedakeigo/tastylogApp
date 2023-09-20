const PORT = process.env.PORT;
const path = require("path");
const logger = require("./lib/log/logger.js");
const accesslogger = require("./lib/log/accesslogger.js");
const applicationlogger = require("./lib/log/applicationlogger.js");
const express = require("express");
const favicon = require("serve-favicon");
const app = express();

// expressセッティング
app.set("view engine", "ejs");

// セキュリティ対策
app.disable("x-powered-by");

app.use(favicon(path.join(__dirname, "/public/favicon.ico")));
// Staticファイルの読み込み
// __dirnameは現在のディレクトリを表す
app.use("/public", express.static(path.join(__dirname, "/public")));

// access logの設定
app.use(accesslogger());

// Dynamicファイルの読み込み
app.use("/", require("./routes/index.js"));

// application logの設定
app.use(applicationlogger());

// サーバー起動
app.listen(PORT, () => {
  logger.application.info(`Server running on port ${PORT}`);
});
