const router = require("express").Router();
const { Blog, Comment, User } = require("../../models");

// GET all blogs that belong to the logged in user
router.get("/dashboard", async (req, res) => {
  //   try {
  //     const dbGalleryData = await Gallery.findByPk(req.params.id, {
  //       include: [
  //         {
  //           model: Painting,
  //           attributes: [
  //             "id",
  //             "title",
  //             "artist",
  //             "exhibition_date",
  //             "filename",
  //             "description",
  //           ],
  //         },
  //       ],
  //     });
  //     const gallery = dbGalleryData.get({ plain: true });
  //     res.render("gallery", { gallery, loggedIn: req.session.loggedIn });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json(err);
  //   }
});

module.exports = router;
