const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("testing");
});
app.use("", (req, res) => {
  res.send("Dashboard");
});
app.use("/hello", (req, res) => {
  res.send("Hola");
});

app.listen(3000, () => {
  console.log("Server is listening");
});
