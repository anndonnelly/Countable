'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Follows', [{
        // name: 'John Doe',
        // isBetaMember: false
      }], {});
   
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Follows', null, {});
    
  }
};
