const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const dbURL =
  "mongodb+srv://shiva8004:shiva8004@nodejstut.baipdd6.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dbURL)
  .then(() => {
    console.log("Connection Done");
  })
  .catch((err) => {
    console.log(err);
  });
// Register View Engine
app.set("view engine", "ejs");
// app.set("views", "views");

// Listen for Requests
app.listen(3000, () => {
  console.log("Server Started");
});

// Third Party Module
app.use(morgan("tiny"));

// Middleware & Static Files
app.use(express.static("public"));

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Web Development",
      snippet: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      title: "Food Making Recipie",
      snippet: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      title: "Calculation Problems",
      snippet: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
  ];
  res.render("index", { title: "Home", blogs });
  // res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/home", (req, res) => {
  res.redirect("/");
});

app.get("/blogs", (req, res) => {
  res.redirect("/");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
  // res.sendFile("./views/about.html", { root: __dirname });
});

app.get("/blogs/create", (req, res) => {
  res.render("newblog", { title: "Create Blog" });
  // res.sendFile("./views/about.html", { root: __dirname });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "Error 404" });
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
});
