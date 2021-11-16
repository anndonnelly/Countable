'use strict';
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
    {}
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
  return User;
};
