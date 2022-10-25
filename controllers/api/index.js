const router = require("express").Router();

const loginRoutes = require("./login-routes");
const blogRoutes = require("./blog-routes");
const commentRoutes = require("./comment-routes");
const dashboardRoutes = require("./dashboard-routes");

router.use("/login", loginRoutes);
router.use("/blogs", blogRoutes);
router.use("/comments", commentRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
