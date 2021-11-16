'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define(
    "Follow",
    {
      followerId: {
        type: DataTypes.INTEGER,
        references: { model: "Users" },
      },
      followingId: {
        type: DataTypes.INTEGER,
        references: { model: "Users" },
      },
    },
    {}
  );
  Follow.associate = function(models) {
    // associations can be defined here
  };
  return Follow;
};