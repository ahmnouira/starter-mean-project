const express = require("express");
const config = require("./app/config/config");
const db = require("./app/models/db");

let app = express();

app = config(app);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://${app.get("host")}:${app.get("port")}`);
});

module.exports = app;
