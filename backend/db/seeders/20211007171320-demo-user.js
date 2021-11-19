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
          avatar:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637337889/Countable/download_eeyywr.jpg",
        },
        {
          email: "demoTwo@user.io",
          username: "DemoTwo",
          hashedPassword: bcrypt.hashSync("password"),
          avatar:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637337889/Countable/download_eeyywr.jpg",
        },
        {
          email: "donnelly.ann21@gmail.com",
          username: "anndonnelly",
          hashedPassword: bcrypt.hashSync("password"),
          avatar:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637338035/Countable/EEBCFE81-78E0-4DA1-B98C-82DAC836F310_h3g063.jpg",
        },
        {
          email: "patriciambdonnelly@gmail.com",
          username: "pdonnelly",
          hashedPassword: bcrypt.hashSync("password"),
          avatar:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637338120/Countable/IMG-5981_knrrek.jpg",
        },
        {
          email: "nmadonnelly@gmail.com",
          username: "noelmario",
          hashedPassword: bcrypt.hashSync("password"),
          avatar:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637338296/Countable/IMG-5982_scjkn1.jpg",
        },
        {
          email: "bdonnelly090@gmail.com",
          username: "bdonnz",
          hashedPassword: bcrypt.hashSync("password"),
          avatar:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637338520/Countable/IMG-5984_e4jbcg.jpg",
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
          avatar:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637339157/Countable/IMG-5986_xmphkj.jpg",
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
          avatar:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637339259/Countable/IMG-5987_e8p8jr.jpg",
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
          avatar:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637339348/Countable/unnamed_du6z1l.jpg",
        },
        {
          email: "charlieward18@gmail.com",
          username: "charlieward",
          hashedPassword: bcrypt.hashSync("password"),
          avatar:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637339438/Countable/IMG-5989_gebm3h.jpg",
        },
        {
          email: "paigelahaie@gmail.com",
          username: "paigelahaie",
          hashedPassword: bcrypt.hashSync("password"),
          avatar:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637339979/Countable/IMG-8067_cdutsn.jpg",
        },
        {
          email: "elizabethspencer@gmail.com",
          username: "lizspencer",
          hashedPassword: bcrypt.hashSync("password"),
          avatar:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637340174/Countable/IMG-5990_rimwno.jpg",
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
          avatar:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637340283/Countable/7bca2c12-4e86-4e6e-bd14-ed92f14664db_okvnid.jpg",
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
          avatar:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637340466/Countable/IMG-5992_tt1vua.jpg",
        },
        {
          email: "tenaciousg@gmail.com",
          username: "work.gmiddleton",
          hashedPassword: bcrypt.hashSync("password"),
          avatar:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637339060/Countable/Screen_Shot_2021-11-19_at_11.24.08_AM_tchiij.png",
        },
        {
          email: "brandonmohan@gmail.com",
          username: "brandonmohan",
          hashedPassword: bcrypt.hashSync("password"),
          avatar:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637340601/Countable/Screen_Shot_2021-11-19_at_11.49.36_AM_kdukbf.png",
        },
        {
          email: "bsimpson@gmail.com",
          username: "bradleysimpson",
          hashedPassword: bcrypt.hashSync("password"),
          avatar:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637343682/Countable/59807764_xtlqeg.jpg",
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

