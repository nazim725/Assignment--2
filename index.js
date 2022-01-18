const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.use("/users", (req, res, next) => {
  console.log("This is Users Route");
  res.send("<h1>This is Users Route</h1>");
});

app.use("/", (req, res, next) => {
  console.log("This is Home Page Route");
  res.send("<h1>This is Home Page Route</h1>");
});

app.listen(port, () => {
  console.log("Listening on Port:", port);
});
