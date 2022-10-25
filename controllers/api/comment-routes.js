const router = require("express").Router();
const { Blog, Comment, User } = require("../../models");

// GET all comments
router.get("/", async (req, res) => {
  try {
    const dbCommentData = await Comment.findAll();
    const comments = dbCommentData.map((comment) =>
      comment.get({ plain: true })
    );
    // res.render("gallery", { gallery, loggedIn: req.session.loggedIn });
    res.status(200).json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST one comment
router.post("/", async (req, res) => {
  try {
    const dbCommentData = await Comment.create(req.body);
    res.status(200).json(dbCommentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE one comment
router.delete("/:id", async (req, res) => {
  try {
    const deletedData = await Comment.destroy({
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
