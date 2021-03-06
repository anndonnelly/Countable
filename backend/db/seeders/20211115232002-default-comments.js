'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert(
        "Comments",
        [
          {
            comment: "Where in Malahide is this?",
            postId: 23,
            userId: 1,
          },
          {
            comment:
              "The Cobblestone is far more than just a pub. It is a bastion of Irish Culture. People come from all over the world to share and learn Irish music, song, dance, language and storytelling.",
            postId: 24,
            userId: 3,
          },
          {
            comment: "The planning system is definitely broken. I'll be there",
            postId: 24,
            userId: 2,
          },
          {
            comment:
              "There is no consistency in planning decisions with regard to proposed builds in close proximity to protected structures.",
            postId: 26,
            userId: 1,
          },
          {
            comment:
              "I cannot count the amount of hotels being built in Dublin. Straight-forward housing is refused, but investment, build-to-rent and businesses and hotels are not…",
            postId: 26,
            userId: 2,
          },
          {
            comment:
              "If this were to go ahead it has potential to fundamentally change the whole sense and character of the passageway.",
            postId: 26,
            userId: 3,
          },
          {
            comment:
              "They have to have a better plan than to close off one of the best cycle lanes in the city during rush hour",
            postId: 10,
            userId: 4,
          },
          {
            comment:
              "Plans for a cycle path on the one-way main roads either side of the River Liffey have been seven years in the making. In places two lanes of motor traffic have been reduced to one, adding an extra bus lane, but cycling here remains unpleasant",
            postId: 10,
            userId: 7,
          },
          {
            comment:
              "Time and time again” An Bord Pleanála had ignored the concerns of citizens and the City Development Plan in favour of hotels and we are at the stage where we need to act on this and make sure our voices are heard.",
            postId: 26,
            userId: 8,
          },
          {
            comment:
              "I recommened contacting the ESB if you are concerned that it poses a potential risk to a power line",
            postId: 23,
            userId: 17,
          },
          {
            comment:
              "The rights and responsibilities of tree ownership are complex although ultimately the owner of land on which a tree is growing is responsible for its safety and maintenance",
            postId: 25,
            userId: 11,
          },
          {
            comment:
              "Have you tried contacting the Parks Technical Officer? I emailed them and heard back from them within a couple of days and found them very helpful",
            postId: 25,
            userId: 13,
          },
          {
            comment:
              "This is shocking to see and unfortunately something I come across regularly particularly in the East Village..",
            postId: 1,
            userId: 14,
          },
          {
            comment:
              "Can confirm this has been taken care of since you posted!",
            postId: 7,
            userId: 3,
          },
          {
            comment:
              "Myself and some friends will be particpating in a two day sleep out in solidarity with youth facing homelessness on November 18th. The funds we raise will help Covenant House NY provide 24/7 care and hopefully shines light on the youth homelessness crisis. More information can be found on the Covenant House website",
            postId: 8,
            userId: 3,
          },
          {
            comment:
              "Residents have been complaining to the city about the endless issues and lack of communication.",
            postId: 22,
            userId: 12,
          },
          {
            comment:
              "Park Slope residents blame the construction work spanning Sixth Avenue from Union Street to Park Place, where the street has been dug up to replace underground water mains.",
            postId: 22,
            userId: 16,
          },
          {
            comment: "Where are you based?",
            postId: 21,
            userId: 28,
          },
          {
            comment: "Ames are you ok??",
            postId: 19,
            userId: 8,
          },
          {
            comment:
              "Completely agree, I started commuting on the DART to work as the traffic was affecting my mental health",
            postId: 20,
            userId: 22,
          },
          {
            comment:
              "Getting nowhere with the litterbug hotline",
            postId: 27,
            userId: 23,
          },
        ],

        {}
      );
   
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Comments', null, {});
    
  }
};


