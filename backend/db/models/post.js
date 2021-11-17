'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    imageUrl: {type:DataTypes.STRING(256),
        allowNull: false,
    },
    caption: DataTypes.TEXT,
    userId:{
      type: DataTypes.INTEGER,
      references: { model: "Users" }}
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.User, { foreignKey: "userId" });
    Post.hasMany(models.Comment, {
      foreignKey: "postId",
      onDelete: "CASCADE",
      hooks: true,
    });
    Post.hasMany(models.Like, {
      foreignKey: "postId",
      onDelete: "CASCADE",
      hooks: true,
    });
  };
  return Post;
};