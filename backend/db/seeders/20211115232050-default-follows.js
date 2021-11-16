'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert(
        "Follows", [
          {
              followerId: 1,
              followingId: 1
          }
      ], {});
   
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete("Follows", null, {});
    
  }
};
