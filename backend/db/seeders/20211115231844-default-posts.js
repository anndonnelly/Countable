'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert(
       "Posts",
       [
         {
        //    name: "John Doe",
        //    isBetaMember: false,
         },
       ],
       {}
     );
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete("Posts", null, {});
    
  }
};
