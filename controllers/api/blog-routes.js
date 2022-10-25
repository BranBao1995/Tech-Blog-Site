const router = require("express").Router();
const { Blog, Comment, User } = require("../../models");

// GET one blog
router.get("/:id", async (req, res) => {
  try {
    const dbBlogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: ["content", "creation_date"],
        },
      ],
    });
    const blogs = dbBlogData.get({ plain: true });
    // res.render("gallery", { gallery, loggedIn: req.session.loggedIn });
    res.status(200).json(dbBlogData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST one blog
router.post("/", async (req, res) => {
  try {
    const dbBlogData = await Blog.create(req.body);
    res.status(200).json(dbBlogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE one blog
router.delete("/:id", async (req, res) => {
  try {
    const deletedData = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(deletedData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
