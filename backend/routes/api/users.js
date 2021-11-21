// This file will hold the resources for the route paths beginning with /api/users
const express = require("express");
const asyncHandler = require("express-async-handler");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");
const router = express.Router();
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const {Op} = require('sequelize')
const {singleMulterUpload} = require("../../awsS3.js")
const {singlePublicFileUpload} = require("../../awsS3.js");

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

// Sign up
// router.post(
//   '/',
//   validateSignup,
//   asyncHandler(async (req, res) => {
//     const { email, password, username } = req.body;
//     const user = await User.signup({ email, username, password });

//     await setTokenCookie(res, user);

//     return res.json({
//       user,
//     });
//   }),
// );

router.post(
  "/",
  singleMulterUpload("avatar"),
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const avatar = await singlePublicFileUpload(req.file);
    console.log("AVATAR", avatar)
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



router.put(
  "/search",
  asyncHandler(async function (req, res) {
    const search = req.body.input
    let users
    let searchResult = false
    if (search !== undefined){
        users = await User.findAll({
            where: {
                username :{
                    [Op.iLike]: `%${search}%`
                }
            }
        })
        if (users.length > 0){
            searchResult = true
        }
    } else {
        searchResult = false;
        users = await User.findAll()
    }
    console.log("USERS", users)
    return res.json(users)
  })
);



module.exports = router;


