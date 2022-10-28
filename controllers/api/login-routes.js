const router = require("express").Router();
const { Blog, Comment, User } = require("../../models");

// CREATE new user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = dbUserData.username;
      req.session.userId = dbUserData.id;
      // res.render("main", {
      //   loggedInUser,
      // });
      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }
    // loggedInUser = dbUserData.get({ plain: true });
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = dbUserData.username;
      req.session.userId = dbUserData.id;
      // res.render("main", {
      //   loggedInUser,
      // });
      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// get currently logged in user
router.get("/current-user", (req, res) => {
  // try {
  //   const dbBlogData = await Blog.findByPk(req.params.id, {
  //     include: [
  //       {
  //         model: User,
  //         attributes: ["username"],
  //       },
  //     ],
  //   });
  //   const blog = dbBlogData.get({ plain: true });

  //   const dbCommentData = await Comment.findAll({
  //     where: {
  //       blog_id: req.params.id,
  //     },
  //     include: [
  //       {
  //         model: User,
  //         attributes: ["username"],
  //       },
  //     ],
  //   });

  //   const comments = dbCommentData.map((comment) =>
  //     comment.get({ plain: true })
  //   );

  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json(err);
  // }
  res.status(200).json({
    id: req.session.id,
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
