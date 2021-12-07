const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const {Post, User, Comment, Like} = require("../../db/models")
const { singleMulterUpload } = require("../../awsS3.js");
const { singlePublicFileUpload } = require("../../awsS3.js");
const {Op} = require("sequelize");

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
  "/one/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const post = await Post.findByPk(id, {
      include: [
        {
          model: User,
        },
        {
          model: Comment,
          include: [
            {
              model: User,
            },
          ],
        },
      ],
    }); 

    const onePost = await res.json(post);
    return onePost;
  })
);


// Likes
router.get(
  "/:id/likes",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const likes = await Like.findAll({
        where: { "postId": {[Op.eq]: id}}
      
    });
    const allLikes = await res.json(likes);
    return allLikes;
  })
);

router.post(
  "/:id/likes",
  asyncHandler(async (req, res) => {
    const like = await Like.create(req.body);
    return res.json(like);
  })
);

router.delete(
  "/:id/likes",
  asyncHandler(async function (req, res) {
    const id = req.params.id;
    const like = await Like.findByPk(id);
    if (!like) throw new Error("Cannot find like");
    await like.destroy(req.body);
    return res.json(like);
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
  singleMulterUpload("imageUrl"),
  asyncHandler(async (req, res) => {
    const { caption, userId } = req.body;
    const imageUrl = await singlePublicFileUpload(req.file);
    const post = await Post.create({
      caption,
      imageUrl,
      userId,
    });
    return res.json({
      post,
    });
  })
);


router.put(
  "/:id",
  asyncHandler(async function (req, res) {
    const id = req.params.id;
    const post = await Post.findByPk(id);
    await post.update(req.body)
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
