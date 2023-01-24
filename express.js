const express = require("express");
const morgan = require("morgan");
const app = express();

// Register View Engine
app.set("view engine", "ejs");
// app.set("views", "views");
app.listen(3000, () => {
  console.log("Listening Started");
});

// Middleware & Static Files
app.use(express.static("public"));
// Third Party Module
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Web Development",
      snippet: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      body: "lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
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
});

app.get("/home", (req, res) => {
  res.redirect("/");
});

app.get("/blogs", (req, res) => {
  res.redirect("/");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});

app.get("/blogs/create", (req, res) => {
  res.render("newblog", { title: "Create Blog" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "Error 404" });
});
