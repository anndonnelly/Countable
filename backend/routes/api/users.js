// This file will hold the resources for the route paths beginning with /api/users
const express = require("express");
const asyncHandler = require("express-async-handler");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Follow } = require("../../db/models");
const router = express.Router();
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { Op } = require("sequelize");
const { singleMulterUpload } = require("../../awsS3.js");
const { singlePublicFileUpload } = require("../../awsS3.js");

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4, max: 30 })
    .withMessage("Please provide a username between 4 and 30 characters long."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

router.post(
  "/",
  singleMulterUpload("avatar"),
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const avatar = req.file
      ? await singlePublicFileUpload(req.file)
      : "https://res.cloudinary.com/dis83syog/image/upload/v1637337889/Countable/download_eeyywr.jpg";
    const user = await User.signup({
      username,
      email,
      password,
      avatar,
    });
    setTokenCookie(res, user);
    return res.json({
      user,
    });
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const userId = req.params.id;
    const user = await User.findByPk(userId, {
      include: ["followers", "following"],
    });
    //   const user = await User.findAll({
    //       where: {id: userId}
    //   })
    return res.json(user);
  })
);

router.put(
  "/search",
  asyncHandler(async function (req, res) {
    const search = req.body.input;
    let users;
    let searchResult = false;
    if (search !== undefined) {
      users = await User.findAll({
        where: {
          username: {
            [Op.iLike]: `%${search}%`,
          },
        },
      });
      if (users.length > 0) {
        searchResult = true;
      }
    } else {
      searchResult = false;
      users = await User.findAll();
    }
    return res.json(users);
  })
);

// Followers
router.get(
  "/:id/followers",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const followers = await User.findByPk(id, {
      include: ["followers"],
    });
    // console.log("\n\n\n", followers.followers)
    return res.json(followers);
  })
);

router.post(
  "/:id/followers",
  asyncHandler(async (req, res) => {
    const { followerId, followingId } = req.body;
    const alreadyFollowing = await Follow.findOne({
      where: {
        followerId: followerId,
        followingId: followingId,
      },
    });
    if (!alreadyFollowing) {
      const follower = await Follow.create(req.body);
      return res.json(follower);
    } else {
        return res.json(false)
    }
  })
);

// Following
router.get(
  "/:id/following",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const following = await User.findByPk(id, {
      include: ["following"],
    });
    return res.json(following);
  })
);

router.delete(
  "/:followerId/following/:followingId",
  asyncHandler(async function (req, res) {
    const { followingId, followerId } = req.params;

    const follow = await Follow.findOne({
      where: {
        followerId: followerId,
        //   followerId can be thought of as userId
        followingId: followingId,
      },
    });
    if (follow) {
      await follow.destroy(req.body);
      return res.json(true);
    } else {
      return res.json(false);
    }
  })
);

module.exports = router;
