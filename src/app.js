const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("testing");
});

app.get("/user", (req, res) => {
  res.send({ firstName: "Tathagat", secondName: "Lord" });
});
app.post("/user", (req, res) => {
  res.send("Sucessfully Posted");
});
app.delete("/user", (req, res) => {
  res.send("Deleted");
});

app.listen(3000, () => {
  console.log("Server is listening");
});
