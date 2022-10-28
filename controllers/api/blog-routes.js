const router = require("express").Router();
const { Blog, Comment, User } = require("../../models");

// GET one blog
router.get("/:id", async (req, res) => {
  try {
    const dbBlogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const blog = dbBlogData.get({ plain: true });

    const dbCommentData = await Comment.findAll({
      where: {
        blog_id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const comments = dbCommentData.map((comment) =>
      comment.get({ plain: true })
    );

    res.render("blogPost", {
      blog,
      comments,
      loggedIn: req.session.loggedIn,
      loggedInId: req.session.userId,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST one blog
router.post("/", async (req, res) => {
  try {
    const dbBlogData = await Blog.create({
      ...req.body,
      user_id: req.session.userId,
    });
    res.status(200).json(dbBlogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const dbBlogData = await Blog.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(dbBlogData);
  } catch {
    res.status(500).json(err);
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
