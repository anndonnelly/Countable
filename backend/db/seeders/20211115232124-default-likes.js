"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Likes",
      [
        {
          postId: 1,
          userId: 1,
        },
        {
          postId: 1,
          userId: 2,
        },
        {
          postId: 1,
          userId: 3,
        },
        {
          postId: 1,
          userId: 4,
        },
        {
          postId: 1,
          userId: 5,
        },
        {
          postId: 2,
          userId: 6,
        },
        {
          postId: 2,
          userId: 7,
        },
        {
          postId: 2,
          userId: 8,
        },
        {
          postId: 3,
          userId: 9,
        },
        {
          postId: 3,
          userId: 10,
        },
        {
          postId: 3,
          userId: 11,
        },
        {
          postId: 4,
          userId: 12,
        },
        {
          postId: 4,
          userId: 13,
        },
        {
          postId: 5,
          userId: 14,
        },
        {
          postId: 5,
          userId: 15,
        },
        {
          postId: 5,
          userId: 16,
        },
        {
          postId: 5,
          userId: 17,
        },
        {
          postId: 5,
          userId: 18,
        },
        {
          postId: 6,
          userId: 19,
        },
        {
          postId: 6,
          userId: 20,
        },
        {
          postId: 6,
          userId: 21,
        },
        {
          postId: 6,
          userId: 22,
        },
        {
          postId: 6,
          userId: 23,
        },
        {
          postId: 6,
          userId: 24,
        },
        {
          postId: 7,
          userId: 25,
        },
        {
          postId: 8,
          userId: 26,
        },
        {
          postId: 8,
          userId: 27,
        },
        {
          postId: 9,
          userId: 28,
        },
        {
          postId: 10,
          userId: 29,
        },
        {
          postId: 10,
          userId: 30,
        },
        {
          postId: 10,
          userId: 31,
        },
        {
          postId: 10,
          userId: 1,
        },
        {
          postId: 10,
          userId: 2,
        },
        {
          postId: 11,
          userId: 3,
        },
        {
          postId: 11,
          userId: 4,
        },
        {
          postId: 11,
          userId: 5,
        },
        {
          postId: 11,
          userId: 6,
        },
        {
          postId: 12,
          userId: 7,
        },
        {
          postId: 12,
          userId: 8,
        },
        {
          postId: 13,
          userId: 9,
        },
        {
          postId: 14,
          userId: 10,
        },
        {
          postId: 15,
          userId: 11,
        },
        {
          postId: 15,
          userId: 12,
        },
        {
          postId: 16,
          userId: 13,
        },
        {
          postId: 16,
          userId: 14,
        },
        {
          postId: 16,
          userId: 15,
        },
        {
          postId: 17,
          userId: 16,
        },
        {
          postId: 18,
          userId: 17,
        },
        {
          postId: 18,
          userId: 18,
        },
        {
          postId: 18,
          userId: 19,
        },
        {
          postId: 19,
          userId: 20,
        },
        {
          postId: 20,
          userId: 21,
        },
        {
          postId: 20,
          userId: 22,
        },
        {
          postId: 20,
          userId: 23,
        },
        {
          postId: 21,
          userId: 23,
        },
        {
          postId: 22,
          userId: 24,
        },
        {
          postId: 23,
          userId: 25,
        },
        {
          postId: 23,
          userId: 26,
        },
        {
          postId: 23,
          userId: 27,
        },
        {
          postId: 24,
          userId: 28,
        },
        {
          postId: 25,
          userId: 29,
        },
        {
          postId: 26,
          userId: 30,
        },
        {
          postId: 26,
          userId: 31,
        },
        {
          postId: 26,
          userId: 1,
        },
        {
          postId: 26,
          userId: 2,
        },
        {
          postId: 27,
          userId: 3,
        },
        {
          postId: 28,
          userId: 4,
        },
        {
          postId: 28,
          userId: 5,
        },
        {
          postId: 28,
          userId: 6,
        },
        {
          postId: 28,
          userId: 7,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Likes", null, {});
  },
};
