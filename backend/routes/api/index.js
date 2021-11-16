const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const postsRouter = require("./posts.js");
const commentsRouter = require("./comments.js");
const asyncHandler = require("express-async-handler");
const { setTokenCookie } = require("../../utils/auth.js");
const { User } = require("../../db/models");
const { restoreUser } = require("../../utils/auth.js");
const { requireAuth } = require("../../utils/auth.js");


router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/posts", postsRouter);
router.use("/comments", commentsRouter);



router.get("/restore-user", restoreUser, (req, res) => {
  return res.json(req.user);
});


module.exports = router;



