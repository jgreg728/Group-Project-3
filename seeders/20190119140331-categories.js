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
    return queryInterface.bulkInsert('categories', [{
      categoryName: 'ActiveLife',
      categorySearch: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Arts & Entertainment',
      categorySearch: 'arts',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Bicycles',
      categorySearch: 'bicycles',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Food',
      categorySearch: 'food',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Health & Medical',
      categorySearch: 'health',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Hotels & Travel',
      categorySearch: 'hotelstravel',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Local Flavor',
      categorySearch: 'localflavor',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Local Services',
      categorySearch: 'localservices',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Nightlife',
      categorySearch: 'nightlife',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Public Services & Government',
      categorySearch: 'publicservicesgovt',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Religious Organizations',
      categorySearch: 'religiousorgs',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Restaurants',
      categorySearch: 'restaurants',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Shopping',
      categorySearch: 'shopping',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {})
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
