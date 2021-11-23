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
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637252275/Countable/FullSizeRender_p98rlb.jpg",
          caption:
            "Seen on Flatbush this afternoon. Was unable to find parking due to the trash left in parking spaces",
          userId: 20,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637253773/Countable/unnamed_u0trch.jpg",
          caption:
            "I noticed another user mentioned something along the same lines and I agree. More street lights are needed down at the Bull Wall. It's unsafe at night without them and will reduce the risks of accidents and injuries ",
          userId: 25,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637330743/Countable/unnamed_bsxzec.jpg",
          caption:
            "Property developers are teaming up with politicians to remove a cultural gem in my neighbourhood - The Cobblestone pub. Please don't give the property developers planning permission to remove the Cobblestone pub. The Cobblestone it is one of the last bastions of live Irish traditional music in my city, we don't need another hotel in it's place",
          userId: 18,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637330959/Countable/unnamed_b2ffmw.jpg",
          caption:
            "Seen while walking in Williamsburg today. Lots of garbage everywhere and no trash 🗑  bags. Surely more can be done to protect our environment?",
          userId: 14,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637331717/Countable/pothole_uzu2qm.jpg",
          caption:
            "Seen in Park Slope this morning. The street surface has sunken steeply in a line parallel with the wheels of vehicles. This is particularly treacherous for bicycles, since it is hard to see at night, and it's on a downward incline.",
          userId: 19,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637343536/Countable/Screen_Shot_2021-11-19_at_12.34.24_PM_l5ngpd.png",
          caption:
            "Watch out on the roads!  A 10 year old has gotten control of a small steam roller and could be headed your way!",
          userId: 30,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637687290/Countable/35097bd9-b93c-4137-a0cd-96b194849251_1_fjbd0h.jpg",
          caption:
            "Poor public transport solutions lead to traffic jams, delays and ongoing environmental damage",
          userId: 27,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637430361/Countable/538319cf-3374-46fc-87eb-b93e0e471a0b_skdypc.jpg",
          caption:
            "I am an avid runner and have recently moved to Nedlands, Perth, Australia with high hopes for new running routes. I am finding running around Nedlands - a suburban area - difficult to get the hang of despite it being surrounded by green areas and very close to the Swan River. There is often a footpath only on one side of the street and the area is poorly lit at night time. What I loved about running is the fact that you can do it from your front door. It would be great if there were signposts at the corner of every other street with distances written to the river, university and beach for example. That way, I would be able to find my way to lovely running routes without looking at maps on my phone while I run - which is in itself quite dangerous! Just a thought 🏃🏼‍♀️",
          userId: 23,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637431385/Countable/ae198084-84ed-4c01-a402-5371b65d5caa_igzobj.jpg",
          caption:
            "Dublin is one of the most dangerous cities in Europe for a cyclist 🚴‍♀️ I cycle down this road everyday and often have to swerve out of the way to avoid traffic, please put in designated cycle lanes before someone gets hurt",
          userId: 7,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637433104/Countable/unnamed_va1ymq.jpg",
          caption:
            "This is my route to work. Road works scheduled at peak rush hour traffic times are causing massive delays and increases in congestion. Multiple seperate road works on the same road should not be scheduled for the same time to avoid this issue. This would also be alieviated by scheduling road works for off peak times.",
          userId: 8,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637444393/Countable/20211120_153004_wdu3pj.jpg",
          caption:
            "Old construction project materials left here for months. I hope this is taken care of accordingly as it is unsighlty and bad for the environment",
          userId: 21,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637594509/Countable/Pothole-1024x683_zf2jdr.jpg",
          caption:
            "As per my last post. Also seen in Park Slope while on my commute this morning",
          userId: 19,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637077266/Countable/image_lmh6nq.jpg",
          caption:
            "Spotted on drive to Malahide this afternoon. I'm assuming this is damage caused from storm Ali last week. Does anyone know if this has been reported to the local authority?",
          userId: 1,
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dis83syog/image/upload/v1637075742/Countable/Cobblestone_ujscdd.jpg",
          caption:
            "A protest is being organised this Saturday against the development of a hotel on the site of Smithfield’s Cobblestone pub. The protest is planned to take place at 1pm in Smithfield Square. Please join us and show your support",
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
            "https://res.cloudinary.com/dis83syog/image/upload/v1637687024/Countable/580c7641-4c32-474d-b79e-6b0d64e352b7_vowvds.jpg",
          caption: "So disappointing to see this on the seafront this morning",
          userId: 7,
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
