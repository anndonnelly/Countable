const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const {Post, User, Comment} = require("../../db/models")

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
        },
        {
          model: Comment,
        },
      ],
    });
    return res.json(posts);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const post = await Post.findByPk(id);
    return res.json(post);
  })
);

// Profile Page
router.get(
  "/users/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const post = await Post.findAll({
        where: {
            userId: id
        },
        include: User
    });
    return res.json(post);
  })
);

router.post(
  "/",
  asyncHandler(async(req, res) => {
    const post = await Post.create(req.body);
    return res.json(post);
  })
);

router.put(
  "/:id",
  asyncHandler(async function (req, res) {
    const id = req.params.id;
    const post = await Post.findByPk(id);
    post.update(req.body)
    return res.json(post);
  })
);

router.delete(
  "/:id",
  asyncHandler(async function (req, res) {
    const id = req.params.id;
    const post = await Post.findByPk(id);
    if (!post) throw new Error("Cannot find post");
    await post.destroy(req.body);
    return res.json(post);
  })
);

module.exports = router;
