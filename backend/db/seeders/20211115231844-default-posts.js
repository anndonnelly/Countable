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
            "Spotted on drive to Malahide this afternoon. I'm assuming this is damage caused from storm Ali last week. Does anyone know if this has been reported to the local authority yet?",
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
            "https://res.cloudinary.com/dis83syog/image/upload/v1637158733/Countable/1e7446e8-5bdb-480c-a724-c211fac9caf9_vtzu16.jpg",
          caption:
            "I have recently moved to Louise Street, Nedlands. My house is adjacent to the rose garden. There are two trees but mainly one which has a large branch coming over the wall into the garden. In the recent weather a lot of small branches and leaves have come off into the garden. I am wondering can someone from Park Services cut the offending branches or is it acceptable for me to trim the ones that are overhanging? I just want to check as the trees are in the park. Many thanks, Parker Shaw",
          userId: 17,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637076005/Countable/musician-under-merchants-arch-dublin-barry-o-carroll_srifpa.jpg",
          caption:
            "Please join us Saturday December 4th to protest the demolition of a beloved old building containing a mix of independent shops on Merchant’s Arch Lane in Dublin.",
          userId: 1,
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
            "https://res.cloudinary.com/dis83syog/image/upload/v1637159189/Countable/8ff20ca3-f486-4782-a1d5-fb634cf0cf5c_n24rpt.jpg",
          caption:
            "These roads in the city center are too dangerous at night, we need more streetlights so they are safer for everyone",
          userId: 6,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637123240/Countable/Screen_Shot_2021-11-16_at_11.27.07_PM_mwspha.png",
          caption: "Oh no. The tree. It's broken",
          userId: 29,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637159891/Countable/1a908726-2396-41e9-ad47-31f8de6a26f9_b5lxji.jpg",
          caption:
            "Hi, we are based in St. Stephen's Green. We are extremely concerned as we haven't had a garbage collection for 3 weeks. People have started leaving their rubbish on the pavement. This needs to be addressed without delay. - An Anxious Citizen. 1/3",
          userId: 4,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637160121/Countable/088a7e58-ecfb-47d0-858d-c7619ab864df_roioys.jpg",
          caption: "As per my previous post 2/3.",
          userId: 4,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637160165/Countable/10289f5a-f520-4512-aeca-2f663691efea_fr56yg.jpg",
          caption: "As per my previous posts 3/3.",
          userId: 4,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637160346/Countable/1a414502-9987-4429-9195-d6938353e80b_fefkyy.jpg",
          caption:
            "Dear Sir, Madam, I was out doing my shopping this morning and noticed this broken footpath where the workmen left in a dangerous condition from yesterday. Can you please arrange to get fixed as soon as possible. Picture taken on side street off Dame Street beside the Olympia Theatre. Thank you Noel.",
          userId: 5,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637160582/Countable/IMG_0242_ttz45m.jpg",
          caption:
            "There's no doubt homelessness in New York City is a major issue. The Department of Homeless Services needs to step up and create actionable plans to combat the issue. There needs to be an increase in shelter bed availability and proper resources to assist with the issue",
          userId: 10,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637162529/Countable/IMG_20180629_220217_kegnyr.jpg",
          caption:
            "Dear Sir, Madam, I wish to complain about the delay emptying rubbish bins in my area. They are being left too long and are attracting birds and vermin. They are unsighlty amd can cause disease when the weather is warm. Please arrange more frequent collections. Regards Noel Mario",
          userId: 5,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637162132/Countable/5320_ohqrcf.jpg",
          caption:
            "What happened to the place once spoken of as “the great hope for emerging cycling cities”?",
          userId: 3,
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
