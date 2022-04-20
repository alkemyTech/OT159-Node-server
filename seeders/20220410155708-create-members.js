'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('members', [{
      name: 'Member1',
      facebookUrl: 'facebook.com/Member1',
      instagramUrl: 'instagram.com/Member1',
      linkedinUrl: 'linkedin.com/in/Member1',
      image: 'Member1.jpg',
      description: 'Member1 Description',
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: new Date,
    },
    {
      name: 'Member2',
      facebookUrl: 'facebook.com/Member2',
      instagramUrl: 'instagram.com/Member2',
      linkedinUrl: 'linkedin.com/in/Member2',
      image: 'Member2.jpg',
      description: 'Member2 Description',
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: new Date,
    },
    {
      name: 'Member3',
      facebookUrl: 'facebook.com/Member3',
      instagramUrl: 'instagram.com/Member3',
      linkedinUrl: 'linkedin.com/in/Member3',
      image: 'Member3.jpg',
      description: 'Member3 Description',
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: new Date,
    }]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('members', null, {});
  }
}; 
