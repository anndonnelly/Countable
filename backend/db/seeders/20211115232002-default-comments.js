'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert(
        "Comments",
        [
          {
            comment: "Where is Malahide is this?",
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
            postId: 3,
            userId: 1,
          },
          {
            comment:
              "Straight-forward housing is refused, but investment, build-to-rent and businesses and hotels are not… I cannot count the amount of hotels being built in Dublin",
            postId: 3,
            userId: 2,
          },
          {
            comment:
              "If this were to go ahead it has potential to fundamentally change the whole sense and character of the passageway.",
            postId: 3,
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
        ],
        {}
      );
   
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Comments', null, {});
    
  }
};


