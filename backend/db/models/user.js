'use strict';
const { Validator } = require("sequelize");
const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {

      username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },
      email: {type:DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
      hashedPassword: {
          type:DataTypes.STRING.BINARY,
          allowNull: false
        },
      avatar: DataTypes.STRING,
      bio: DataTypes.TEXT,
      isVerified: DataTypes.BOOLEAN,
    },
    {
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "createdAt", "updatedAt"],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashedPassword"] },
        },
        // should never send hashedPassword to frontend
        loginUser: {
          attributes: {},
          // backend to backend to call
          // we need this for validations
        },
      },
    }
  );

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Comment, { foreignKey: "userId" });
    User.hasMany(models.Like, { foreignKey: "userId" });
    User.hasMany(models.Post, { foreignKey: "userId" });
    User.belongsToMany(models.User, {
      through: "follows",
      as: "followers",
      foreignKey: "follower_id",
      otherKey: "following_id",
    });
      User.belongsToMany(models.User, {
        through: "follows",
        as: "following",
        foreignKey: "following_id",
        otherKey: "follower_id",
      });
  };

  User.prototype.toSafeObject = function () {
    // remember, this cannot be an arrow function
    const { id, username, email } = this; // context will be the User instance
    return { id, username, email };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope("currentUser").findByPk(id);
  };

  User.login = async function ({ credential, password }) {
    const { Op } = require("sequelize");
    const user = await User.scope("loginUser").findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope("currentUser").findByPk(user.id);
    }
  };

  User.signup = async function ({ username, email, password , avatar}) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword,
      avatar
    });
    return await User.scope("currentUser").findByPk(user.id);
  };
  return User;
};
