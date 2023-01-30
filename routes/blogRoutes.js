const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
router.get("/", blogController.blog_index);
router.post("/", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(() => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/create", (req, res) => {
  res.render("newblog", { title: "Create Blog" });
});
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("detailed", { title: result.title, blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
