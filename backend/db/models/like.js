'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define(
    "Like",
    {
      postId: {
        type: DataTypes.INTEGER,
        references: { model: "Posts" },
      },
      userId: {
        type: DataTypes.INTEGER,
        references: { model: "Users" },
      },
    },
    {}
  );
  Like.associate = function(models) {
    // associations can be defined here
    Like.belongsTo(models.User, { foreignKey: "userId" });
    Like.belongsTo(models.Post, { foreignKey: "postId" });
  };
  return Like;
};