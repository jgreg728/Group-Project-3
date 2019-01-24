'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('subcategories',
      [
        {
          subCatName: 'ATV Rentals/Tours',
          subCatSearch: 'atvrentals',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Airsoft',
          subCatSearch: 'airsoft',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Amateur Sports Teams',
          subCatSearch: 'amateursportsteams',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Amusement Parks',
          subCatSearch: 'amusementparks',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Aquariums',
          subCatSearch: 'aquariums',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Archery',
          subCatSearch: 'archery',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Axe Throwing',
          subCatSearch: 'axethrowing',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Badminton',
          subCatSearch: 'badminton',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Baseball Fields',
          subCatSearch: 'baseballfields',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Basketball Courts',
          subCatSearch: 'basketballcourts',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Batting Cages',
          subCatSearch: 'battingcages',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Beach Equipment Rentals',
          subCatSearch: 'beachequipmentrental',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: '',
          subCatSearch: '',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Beaches',
          subCatSearch: 'beaches',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Bike Parking',
          subCatSearch: 'bikeparking',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Bike Rentals',
          subCatSearch: 'bikerentals',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Boating',
          subCatSearch: 'boating',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Bobsledding',
          subCatSearch: 'bobsledding',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Bocce Ball',
          subCatSearch: 'bocceball',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Bowling',
          subCatSearch: 'bowling',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Bubble Soccer',
          subCatSearch: 'bubblesoccer',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Bungee Jumping',
          subCatSearch: 'bungeejumping',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Canyoneering',
          subCatSearch: 'canyoneering',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },





      ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
