const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { Comment } = require("../../db/models");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const comments = await Comment.findAll();
    return res.json(comments);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const comment = await Comment.findByPk(id);
    return res.json(comment);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const comment = await Comment.create(req.body);
    return res.json(comment);
  })
);

router.put(
  "/:id",
  asyncHandler(async function (req, res) {
    const id = req.params.id;
    const comment = await Comment.findByPk(id);
    comment.update(req.body);
    return res.json(comment);
  })
);

router.delete(
  "/:id",
  asyncHandler(async function (req, res) {
    const id = req.params.id;
    const comment = await Comment.findByPk(id);
    if (!comment) throw new Error("Cannot find comment");
    comment.destroy(req.body);
    return res.json({ id });
  })
);

module.exports = router;
