const Blog = require("../models/blog");

// Blog Index
const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("blogs/index", { title: "Home", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

// Blog Create Post
const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};

// Blog Create Get
const blog_create_get = (req, res) => {
  res.render("blogs/newblog", { title: "Create Blog" });
};

// Blog Delete
const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(() => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
};

// Blog Details
const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("blogs/detailed", { title: result.title, blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  blog_index,
  blog_create_post,
  blog_create_get,
  blog_delete,
  blog_details,
};
