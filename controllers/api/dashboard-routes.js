const router = require("express").Router();
const { Blog, Comment, User } = require("../../models");

// GET all blogs that belong to the logged in user
router.get("/:id", async (req, res) => {
  try {
    const dbBlogData = await Blog.findAll({
      where: {
        user_id: req.params.id,
      },
    });

    if (!dbBlogData) {
      console.info("No Blog Posts!");
      res.status(400).json({ message: "No Blog Posts!" });
      return;
    }

    const blogs = dbBlogData.map((blog) => blog.get({ plain: true }));
    res.render("dashboard", {
      blogs,
      loggedIn: req.session.loggedIn,
      loggedInId: req.session.userId,
    });
    // res.status(200).json(dbBlogData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
