const mongoose = require("mongoose");
const config = require("./config");

mongoose.connect(config.mongodb.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
//once : el evento solo se escuchará una vez
db.once("open", () => {
  console.log("--- MongoDB connected");
});

db.on("error", (error) => {
  console.error(`--- MongoDB Error: ${error}`);
});

db.once("disconnected", () => {
  console.log("--- MongoDB disconnected");
});
