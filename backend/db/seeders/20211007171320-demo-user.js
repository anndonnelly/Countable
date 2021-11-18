"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "Demo-lition",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "demoTwo@user.io",
          username: "DemoTwo",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "donnelly.ann21@gmail.com",
          username: "anndonnelly",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "patriciambdonnelly@gmail.com",
          username: "pdonnelly",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "nmadonnelly@gmail.com",
          username: "noelmario",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "bdonnelly090@gmail.com",
          username: "bdonnz",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "amymarieward@hotmail.com",
          username: "amymarie",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "emily.obrien53@mail.dcu.ie",
          username: "emilyobrien",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "roblynch@gmail.com",
          username: "roblynch",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "anniemonaghan3@gmail.com",
          username: "anniemonaghan",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "Rachel.Fitzpatrick@ergogroup.ie",
          username: "rachfitz",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "jenfitz@live.ie",
          username: "jenfitz",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "jill.donnelly27@mail.dcu.ie",
          username: "jilldonnelly",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "juliewagner@gmail.com",
          username: "juliewagner",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "curtiscassell@gmail.com",
          username: "curtiscassell",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "noahspencer@gmail.com",
          username: "noahspencer",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "parkershaw@gmail.com",
          username: "parkershaw",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "charlieward18@gmail.com",
          username: "charlieward",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "paigelahaie@gmail.com",
          username: "paigelahaie",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "elizabethspencer@gmail.com",
          username: "lizspencer",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "danpurcell@gmail.com",
          username: "danpurcell",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "allyfoley@gmail.com",
          username: "allyfoley",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "lucymccourt@gmail.com",
          username: "lucymccourt",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "michaelglynn@gmail.com",
          username: "michaelglynn",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "megancaseydiviney@gmail.com",
          username: "megancaseydiviney",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "patrickstory@gmail.com",
          username: "patrickstory",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "maevedonnelly@gmail.com",
          username: "maevedonnelly",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "tenaciousg@gmail.com",
          username: "work.gmiddleton",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "brandonmohan@gmail.com",
          username: "brandonmohan ",
          hashedPassword: bcrypt.hashSync("password"),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        username: {
          [Op.in]: [
            "Demo-lition",
            "DemoTwo",
            "anndonnelly",
            "pdonnelly",
            "noelmario",
            "bdonnz",
            "amymarie",
            "emilyobrien",
            "roblynch",
            "anniemonaghan",
            "rachfitz",
            "jenfitz",
            "jilldonnelly",
            "juliewagner",
            "curtiscassell",
            "noahspencer",
            "parkershaw",
            "charlieward",
            "paigelahaie",
            "lizspencer",
            "danpurcell",
            "allyfoley",
            "lucymccourt",
            "michaelglynn",
            "megancaseydiviney",
            "patrickstory",
            "maevedonnelly",
            "work.gmiddleton",
          ],
        },
      },
      {}
    );
  },
};

