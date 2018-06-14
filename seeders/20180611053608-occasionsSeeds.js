'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert(
      'occasions', [
          {
          category: "Class",
          title: "Chicken Kablooie",
          date: "June 15 2018",
          start_time: "10 AM",
          end_time: "2:30 PM",
          zipcode: "94705",
          location: 'Golden Bear Center, Berkeley',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus mauris at nisl mattis, ut laoreet sem feugiat. Proin in sapien nisi. Mauris purus ante, iaculis a viverra quis.',
          photo: 'fake.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          FamilyId: 1
        },
        {
          category: "Outdoor",
          title: "Hiking Time",
          date: "June 20 2018",
          start_time: "5:00 AM",
          end_time: "7:30 PM",
          zipcode: "94705",
          location: 'Lake Tahoe, CA',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus mauris at nisl mattis, ut laoreet sem feugiat. Proin in sapien nisi. Mauris purus ante, iaculis a viverra quis.',
          photo: 'fake.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          FamilyId: 1
        },
        {
          category: "Party",
          title: "After party - Project Finished",
          date: "June 21 2018",
          start_time: "7:00 PM",
          end_time: "1:00 AM",
          zipcode: "94705",
          location: 'Spats Bar, Berkeley',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus mauris at nisl mattis, ut laoreet sem feugiat. Proin in sapien nisi. Mauris purus ante, iaculis a viverra quis.',
          photo: 'fake.jpg',
          proposed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          FamilyId: 1
        },
        {
          category: "Sport,",
          title: "Surfing at Pacifica",
          date: "June 21 2018",
          start_time: "8:00 AM",
          end_time: "2:30 PM",
          zipcode: "94705",
          location: 'Pacifica Beach, CA',
          description: 'PLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus mauris at nisl mattis, ut laoreet sem feugiat. Proin in sapien nisi. Mauris purus ante, iaculis a viverra quis.',
          photo: 'fake.jpg',
          proposed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          FamilyId: 1
        },
        {
          category: "Outdoor",
          title: "collecting rocks",
          date: "June 21 2018",
          start_time: "10 AM",
          end_time: "4:30 PM",
          zipcode: "94705",
          location: 'Muir Beach, CA',
          description: 'PLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus mauris at nisl mattis, ut laoreet sem feugiat. Proin in sapien nisi. Mauris purus ante, iaculis a viverra quis.',
          photo: 'fake.jpg',
          proposed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          FamilyId: 1
        }
        
      ]
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
