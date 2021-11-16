"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Posts",
      [
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637031185/Countable/SPR_WTL_170214tree_01_m8lot1.jpg",
          caption: "Unsafe, could hurt someone",
          userId: 1,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete("Posts", [
      {}
    ]);
  },
};
