const router = require("express").Router();
const { Blog, Comment, User } = require("../models");

// GET all blog posts for homepage
router.get("/", async (req, res) => {
  try {
    const dbBlogData = await Blog.findAll();

    const blogs = dbBlogData.map((blog) => blog.get({ plain: true }));
    // res.render("homepage", {
    //   galleries,
    //   loggedIn: req.session.loggedIn,
    // });
    res.status(200).json(dbBlogData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get("/login", (req, res) => {
  //   if (req.session.loggedIn) {
  //     res.redirect("/");
  //     return;
  //   }
  //   res.render("login");
});

module.exports = router;
