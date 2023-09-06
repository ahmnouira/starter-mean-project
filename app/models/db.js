const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:3333/MEAN_web_dev");

mongoose.connection.on("open", () => {
  console.log("mongoose connected");
});
