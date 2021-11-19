'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      comment: { type: DataTypes.TEXT, allowNull: false },
      postId: {
        type: DataTypes.INTEGER,
        references: { model: "Posts" },
      },
      userId: { type: DataTypes.INTEGER, references: { model: "Users" } },
    },
    {}
  );
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignKey: "userId" });
    Comment.belongsTo(models.Post, {
      foreignKey: "postId",
    });
 
  };
  return Comment;
};