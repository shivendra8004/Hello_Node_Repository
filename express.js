const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("Listening On Port 3000");
});
app.get("/", (req, res) => {
  //   res.send("<p>Home Page</p>");
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  //   res.send("<p>About Page</p>");
  res.sendFile("./views/about.html", { root: __dirname });
});
app.get("/about-us", (req, res) => {
  //   res.send("<p>About Page</p>");
  res.redirect("./about");
});
app.get("/help", (req, res) => {
  //   res.send("<p>About Page</p>");
  res.sendFile("./views/help.html", { root: __dirname });
});
app.get("/help-me", (req, res) => {
  res.redirect("./help");
});
app.use((req, res) => {
  res.sendFile("./views/404.html", { root: __dirname });
});
