'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert(
        "Comments",
        [
          {
            comment: "Where in Malahide is this?",
            postId: 1,
            userId: 1,
          },
          {
            comment: "The planning system is definitely broken",
            postId: 2,
            userId: 2,
          },
          {
            comment:
              "The Cobblestone is far more than just a pub. It is a bastion of Irish Culture. People come from all over the world to share and learn Irish music, song, dance, language and storytelling.",
            postId: 2,
            userId: 3,
          },
          {
            comment:
              "There is “no consistency” in planning decisions with regard to proposed builds in close proximity to protected structures.",
            postId: 4,
            userId: 1,
          },
          {
            comment:
              "I cannot count the amount of hotels being built in Dublin. Straight-forward housing is refused, but investment, build-to-rent and businesses and hotels are not…",
            postId: 4,
            userId: 2,
          },
          {
            comment:
              "If this were to go ahead it has potential to fundamentally change the whole sense and character of the passageway.",
            postId: 4,
            userId: 3,
          },
          {
            comment:
              "They have to have a better plan than to close off one of the best cycle lanes in the city during rush hour",
            postId: 13,
            userId: 4,
          },
          {
            comment:
              "Plans for a cycle path on the one-way main roads either side of the River Liffey have been seven years in the making. In places two lanes of motor traffic have been reduced to one, adding an extra bus lane, but cycling here remains unpleasant",
            postId: 13,
            userId: 4,
          },
          {
            comment:
              "An Bord Pleanála has approved a plan which would see independent retailers, including a waffle café, a record shop, a vintage clothing store and a technology repair shop replaced by a single boutique hotel and restaurant unit. Our issue with Merchant’s Arch is that the development is overscaled and inappropriate in character for the area. So far around 30,000 people have supported a petition to “save Merchant’s Arch” from the redevelopment.",
            postId: 4,
            userId: 5,
          },
          {
            comment:
              "Time and time again” An Bord Pleanála had ignored the concerns of citizens and the City Development Plan in favour of hotels and we are at the stage where we need to act on this and make sure our voices are heard.",
            postId: 4,
            userId: 6,
          },
          {
            comment:
              "I recommened contacting the ESB if you are concerned that it poses a potential risk to a power line",
            postId: 1,
            userId: 17,
          },
          {
            comment:
              "I recommened contacting the ESB if you are concerned that it poses a potential risk to a power line",
            postId: 3,
            userId: 17,
          },
          {
            comment:
              "I recommened contacting the ESB if you are concerned that it poses a potential risk to a power line",
            postId: 3,
            userId: 17,
          },
        ],
        {}
      );
   
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Comments', null, {});
    
  }
};


