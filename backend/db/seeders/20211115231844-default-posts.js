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
            "https://res.cloudinary.com/dis83syog/image/upload/v1637077266/Countable/image_lmh6nq.jpg",
          caption:
            "Spotted on drive to Malahide this afternoon. I'm assuming this is damage caused from storm Ali last week. Does anyone know if this has been reported to local authority yet?",
          userId: 1,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637075742/Countable/Cobblestone_ujscdd.jpg",
          caption:
            "A protest is being organised for Saturday against the development of a hotel on the site of Smithfield’s Cobblestone pub. The protest is planned to take place at 1pm in Smithfield Square. Please join us and show your support",
          userId: 2,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637076005/Countable/musician-under-merchants-arch-dublin-barry-o-carroll_srifpa.jpg",
          caption:
            "Please join us Saturday December 4th to protest the demolition of a beloved old building containing a mix of independent shops on Merchant’s Arch Lane in Dublin. An Bord Pleanála has approved a plan which would see independent retailers, including a waffle café, a record shop, a vintage clothing store and a technology repair shop replaced by a single boutique hotel and restaurant unit. Our issue with Merchant’s Arch is that the development is overscaled and inappropriate in character for the area. So far around 30,000 people have supported a petition to “save Merchant’s Arch” from the redevelopment. Time and time again” An Bord Pleanála had ignored the concerns of citizens and the City Development Plan in favour of hotels and we are at the stage where we need to act on this and make sure our voices are heard.",
          userId: 3,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637106518/Countable/Screen_Shot_2021-11-16_at_6.48.17_PM_goeh8n.png",
          caption:
            "This pile of trash sickens me. I don't understand why people can't just put their trash in the dumpster",
          userId: 28,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637123240/Countable/Screen_Shot_2021-11-16_at_11.27.07_PM_mwspha.png",
          caption: "Oh no. The tree. It's broken",
          userId: 29,
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


 // {
        //   imageUrl:
        //     "https://res.cloudinary.com/dis83syog/image/upload/v1637075433/Countable/timthumb9-460x264_kinp48.png",
        //   caption:
        //     "Such a waste of water! Has been running all summer, surely there's a more effective way to help local residents 'cool off' in the summer heat",
        //   userId: 2,
        // },
