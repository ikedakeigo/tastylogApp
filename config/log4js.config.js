const path = require("path");
const LOG_ROOT_DIR = process.env.LOG_ROOT_DIR || path.join(__dirname, "/../logs");


module.exports = {
  appenders: {
    ConsoleLogAppender:{
      type: "console"
    },
    ApplicationLogAppender: {
      type: "dateFile",
      filename: path.join(LOG_ROOT_DIR, "/application.log"),
      pattern: "yyyMMdd",
      daysToKeep: 7,
    },
    AccessLogAppender: {
      type: "dateFile",
      filename: path.join(LOG_ROOT_DIR, "/access.log"),
      pattern: "yyyMMdd",
      daysToKeep: 7,
    }
  },
  categories: {
    "default" :{
      appenders: ["ConsoleLogAppender"],
      level: "ALL"
    },
    "application": {
      appenders: [
        "ApplicationLogAppender",
        "ConsoleLogAppender"
      ],
      level: "info"
    },
    "access": {
      appenders: [
        "AccessLogAppender",
        "ConsoleLogAppender"
      ],
      level: "info"
    }
  }
};
