const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("Server Started");
});
app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/home", (req, res) => {
  res.redirect("/");
});
app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});
app.get("/help", (req, res) => {
  res.sendFile("./views/help.html", { root: __dirname });
});
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
