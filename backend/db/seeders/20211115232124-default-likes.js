'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert(
        "Likes",
        [
        {
            postId: 1,
            userId: 1
        }
        ],
        {}
      );
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Likes', null, {});
    
  }
};
