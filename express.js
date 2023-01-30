const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
const app = express();
mongoose.set("strictQuery", true);
const dbURL =
  "mongodb+srv://shiva8004:test@nodejstut.baipdd6.mongodb.net/NodeTut?retryWrites=true&w=majority";

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("Database Connected");
    app.listen(3000, () => {
      console.log("Listening Started");
    });
  })
  .catch((err) => {
    console.log(err);
  });
// Register View Engine
app.set("view engine", "ejs");
// app.set("views", "views");

// Middleware & Static Files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// Third Party Module
app.use(morgan("tiny"));

// Blog Routes
app.use("/blogs/", blogRoutes);

//Home Page Middle ware
app.get("/", (req, res) => {
  res.redirect("/blogs");
});
app.get("/home", (req, res) => {
  res.redirect("/");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});

// Middleware for any Error This will run always
app.use((req, res) => {
  res.status(404).render("404", { title: "Error 404" });
});
