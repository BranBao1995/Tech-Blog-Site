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
    const blogs = dbBlogData.map((blog) => blog.get({ plain: true }));
    // res.render("gallery", { gallery, loggedIn: req.session.loggedIn });
    res.status(200).json(dbBlogData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
