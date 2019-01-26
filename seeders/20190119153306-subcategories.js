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
        {
          subCatName: 'Carousels',
          subCatSearch: 'carosels',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Challege Courses',
          subCatSearch: 'challengecourses',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Climbing',
          subCatSearch: 'climbing',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Cycling Classees',
          subCatSearch: 'cyclingclasses',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Dart Arenas',
          subCatSearch: 'dartarenas',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Day Camps',
          subCatSearch: 'daycamps',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Disc Golf',
          subCatSearch: 'discgolf',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Diving',
          subCatSearch: 'diving',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Free Diving',
          subCatSearch: 'freediving',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Scuba Diving',
          subCatSearch: 'scuba',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Escape Games',
          subCatSearch: 'escapegames',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Fencing Clubs',
          subCatSearch: 'fencing',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Fishing',
          subCatSearch: 'fishing',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Fitness & Instruction',
          subCatSearch: 'fitness',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Aerial Fitness',
          subCatSearch: 'aerialfitness',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Barre Classes',
          subCatSearch: 'barreclasses',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Boot Camps',
          subCatSearch: 'bootcamps',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Boxing',
          subCatSearch: 'boxing',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Cardio Classes',
          subCatSearch: 'cardioclasses',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Dance Studios',
          subCatSearch: 'dancestudio',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Golf Lessons',
          subCatSearch: 'golflessons',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Gyms',
          subCatSearch: 'gyms',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Circuit Training Gyms',
          subCatSearch: 'circuittraininggyms',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Interval Training Gyms',
          subCatSearch: 'intervaltraininggyms',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Martial Arts',
          subCatSearch: 'martialarts',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Brazilian Jiu-jitsu',
          subCatSearch: 'brazilianjiujitsu',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Chinese Martial Arts',
          subCatSearch: 'chinesemartialarts',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Karate',
          subCatSearch: 'karate',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Kickboxing',
          subCatSearch: 'kickboxing',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Muay Thai',
          subCatSearch: 'mauythai',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Taekwondo',
          subCatSearch: 'taekwondo',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Mediation Centers',
          subCatSearch: 'mediationcenters',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Pilates',
          subCatSearch: 'pilates',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Qi Gong',
          subCatSearch: 'qigong',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Self-defense Classes',
          subCatSearch: 'selfdefenseclasses',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Swimming Lessons/Schools',
          subCatSearch: 'swimminglessons',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Tai Chi',
          subCatSearch: 'taichi',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Trainers',
          subCatSearch: 'healthtrainers',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Yoga',
          subCatSearch: 'yoga',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Flyboarding',
          subCatSearch: 'flyboarding',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Go Karts',
          subCatSearch: 'gokarts',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Golf',
          subCatSearch: 'golf',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Gun/Rifle Ranges',
          subCatSearch: 'gun_ranges',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Gymnastics',
          subCatSearch: 'gymnastics',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Hang Gliding',
          subCatSearch: 'hanggliding',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Hiking',
          subCatSearch: 'hiking',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Horse Racing',
          subCatSearch: 'horseracing',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Hot Air Ballons',
          subCatSearch: 'hot_air_balloons',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Indoor Playcentre',
          subCatSearch: 'indoor_playcenter',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Jet Skis',
          subCatSearch: 'jetskis',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Kids Activities',
          subCatSearch: 'kids_activities',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Kiteboarding',
          subCatSearch: 'kiteboarding',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Lakes',
          subCatSearch: 'lakes',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Laser Tag',
          subCatSearch: 'lasertag',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Mini Golf',
          subCatSearch: 'mini_golf',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Mountain Biking',
          subCatSearch: 'mountainbiking',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Nudist',
          subCatSearch: 'nudist',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Paddleboarding',
          subCatSearch: 'paddleboarding',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Paintball',
          subCatSearch: 'paintball',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Paragliding',
          subCatSearch: 'paragliding',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Parasailing',
          subCatSearch: 'parasailing',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Parks',
          subCatSearch: 'parks',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Dog Parks',
          subCatSearch: 'dog_parks',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Skate Parks',
          subCatSearch: 'skate_parks',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Pickleball',
          subCatSearch: 'pickleball',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Playgrounds',
          subCatSearch: 'playgrouns',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Races & Competitions',
          subCatSearch: 'races',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Racing Experience',
          subCatSearch: 'racingexperience',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Rafting/Kayaking',
          subCatSearch: 'rafting',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Recreation Centers',
          subCatSearch: 'recreation',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Rock Climing',
          subCatSearch: 'rock_climbing',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Sailing',
          subCatSearch: 'sailing',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Scavenger Hunts',
          subCatSearch: 'scavengerhunts',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Scooter Rentals',
          subCatSearch: 'scooterrentals',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Senior Centers',
          subCatSearch: 'seniorcenters',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Skating Rinks',
          subCatSearch: 'skating rinks',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Skydiving',
          subCatSearch: 'skydiving',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Sledding',
          subCatSearch: 'sledding',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Snorkeling',
          subCatSearch: 'snorkeling',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Soccer',
          subCatSearch: 'football',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Sports Clubs',
          subCatSearch: 'sports_clubs',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Squash',
          subCatSearch: 'squash',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Summer Camps',
          subCatSearch: 'summer_camps',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Surfing',
          subCatSearch: 'surfing',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Swimming Pools',
          subCatSearch: 'swimmingpools',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Tennis',
          subCatSearch: 'tennis',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Trampoline Parks',
          subCatSearch: 'trampoline',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Tubing',
          subCatSearch: 'tubing',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Water Parks',
          subCatSearch: 'waterparks',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Wildlife Hunting Ranges',
          subCatSearch: 'wildlifehunting',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Ziplining',
          subCatSearch: 'zipline',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Zoos',
          subCatSearch: 'zoos',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Petting Zoos',
          subCatSearch: 'pettingzoos',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Zorbing',
          subCatSearch: 'zorbing',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 1
        },
        {
          subCatName: 'Arcades',
          subCatSearch: 'arcades',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Art Galleries',
          subCatSearch: 'galleries',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Bingo Halls',
          subCatSearch: 'bingo',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Botanical Gardens',
          subCatSearch: 'gardens',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Cabaret',
          subCatSearch: 'cabaret',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Casinos',
          subCatSearch: 'casinos',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Cinema',
          subCatSearch: 'movietheaters',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Drive-In Theater',
          subCatSearch: 'driveintheater',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Outdoor Movies',
          subCatSearch: 'outdoormovies',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Country Clubs',
          subCatSearch: 'countryclubs',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Cultural Center',
          subCatSearch: 'culturalcenter',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Eatertainment',
          subCatSearch: 'eatertainment',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Farms',
          subCatSearch: 'farms',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Attraction Farms',
          subCatSearch: 'attractionfarms',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Pick Your Own Farms',
          subCatSearch: 'pickyourown',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Ranches',
          subCatSearch: 'ranches',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Festivals',
          subCatSearch: 'festivals',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Haunted Houses',
          subCatSearch: 'hauntedhouses',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Jazz & Blues',
          subCatSearch: 'jazzandblues',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'LAN Centers',
          subCatSearch: 'lencenters',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Makerspaces',
          subCatSearch: 'makerspaces',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Museums',
          subCatSearch: 'museums',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Art Museums',
          subCatSearch: 'artmuseums',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: "Children's Museums",
          subCatSearch: 'childrensmuseums',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Music Venues',
          subCatSearch: 'musicvenues',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Observatories',
          subCatSearch: 'observatories',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Opera & Ballet',
          subCatSearch: 'opera',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Paint & Sip',
          subCatSearch: 'paintandsip',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Performing Arts',
          subCatSearch: 'theater',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Planetarium',
          subCatSearch: 'planetarium',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Professional Sports Teams',
          subCatSearch: 'sportsteams',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Race Tracks',
          subCatSearch: 'racetracks',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Rodeo',
          subCatSearch: 'rodeo',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Socail Clubs',
          subCatSearch: 'social_clubs',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Veterans Organizations',
          subCatSearch: 'veteransorganizations',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Sports Betting',
          subCatSearch: 'sportsbetting',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Stadiums & Arenas',
          subCatSearch: 'stadiumsarenas',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Studio Taping',
          subCatSearch: 'studiotaping',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Supernatural Readings',
          subCatSearch: 'psychic_astrology',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Astrologers',
          subCatSearch: 'astrologers',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Mystics',
          subCatSearch: 'mystics',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Psychic Mediums',
          subCatSearch: 'phychicmediums',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Psychis',
          subCatSearch: 'psychics',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Ticket Sales',
          subCatSearch: 'ticketsales',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Virtual Reality Centers',
          subCatSearch: 'virtualrealitycenters',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Wineries',
          subCatSearch: 'wineries',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Wine Tasting Room',
          subCatSearch: 'winetastingroom',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 2
        },
        {
          subCatName: 'Acai Bowls',
          subCatSearch: 'acaibowls',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Bagels',
          subCatSearch: 'bagels',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Bakeries',
          subCatSearch: 'bakeries',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Beer, Wine & Spirts',
          subCatSearch: 'beer_and_wine',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Beverage Store',
          subCatSearch: 'beverage_stores',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Breweries',
          subCatSearch: 'breweries',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Brewpubs',
          subCatSearch: 'brewpubs',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Bubble Tea',
          subCatSearch: 'bubbletea',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Butcher',
          subCatSearch: 'butcher',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'CSA',
          subCatSearch: 'csa',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Chimney Cakes',
          subCatSearch: 'chimneycakes',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Cideries',
          subCatSearch: 'cideries',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Coffee & Tea',
          subCatSearch: 'coffee',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Coffee Roasteries',
          subCatSearch: 'coffeeroasteries',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Convenience Stores',
          subCatSearch: 'convenience',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Cupcakes',
          subCatSearch: 'cupcakes',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Custom Cakes',
          subCatSearch: 'customcakes',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Desserts',
          subCatSearch: 'desserts',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Distilleries',
          subCatSearch: 'distilleries',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Do-It-Yourself Food',
          subCatSearch: 'diyfood',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Donuts',
          subCatSearch: 'donuts',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Empanadas',
          subCatSearch: 'empanadas',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Farmers Market',
          subCatSearch: 'farmersmarket',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Food Delivery Services',
          subCatSearch: 'fooddeliveryservices',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Food Trucks',
          subCatSearch: 'foodtrucks',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Gelato',
          subCatSearch: 'gelato',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Grocery',
          subCatSearch: 'grocery',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Honey',
          subCatSearch: 'honey',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Ice Cream & Frozen Yogurt',
          subCatSearch: 'icecream',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Imported Food',
          subCatSearch: 'importedfood',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'International Grocery',
          subCatSearch: 'intlgrocery',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Internet Cafes',
          subCatSearch: 'internetcafe',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Juice Bars & Smoothies',
          subCatSearch: 'juicebars',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Kombucha',
          subCatSearch: 'kombucha',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Meaderies',
          subCatSearch: 'meaderies',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Organic Stores',
          subCatSearch: 'organic_stores',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Patisserie/Cake Shop',
          subCatSearch: 'cakeshop',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Piadina',
          subCatSearch: 'piadina',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Poke',
          subCatSearch: 'poke',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Pretzels',
          subCatSearch: 'pretzels',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Shaved Ice',
          subCatSearch: 'shavedice',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Shaved Snow',
          subCatSearch: 'shavedsnow',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Smokehouse',
          subCatSearch: 'smokehouse',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Specialty Food',
          subCatSearch: 'gourmet',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Candy Stores',
          subCatSearch: 'candy',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Cheese Shops',
          subCatSearch: 'cheese',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Chocolatiers & Shops',
          subCatSearch: 'chocolate',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Fruits & Veggies',
          subCatSearch: 'markets',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Health Markets',
          subCatSearch: 'healthmarkets',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Herbs & Spices',
          subCatSearch: 'herbsandspices',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Macarons',
          subCatSearch: 'macarons',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Meat Shops',
          subCatSearch: 'meats',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Olive Oil',
          subCatSearch: 'oliveoil',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Pasta Shops',
          subCatSearch: 'pastashops',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Popcorn Shops',
          subCatSearch: 'popcorn',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Seafood Markets',
          subCatSearch: 'seafoodmarkets',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Street Vendors',
          subCatSearch: 'streetvendors',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Tea Vendors',
          subCatSearch: 'tea',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Water Stores',
          subCatSearch: 'waterstores',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Wineries',
          subCatSearch: 'wineries',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Wine Tasting Room',
          subCatSearch: 'winetastingroom',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 3
        },
        {
          subCatName: 'Acupuncture',
          subCatSearch: 'acupuncture',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Alternative Medicine',
          subCatSearch: 'alternativemedicine',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Animal Assisted Therapy',
          subCatSearch: 'animalassistedtherapy',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Ayurveda',
          subCatSearch: 'ayurveda',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Behavior Analysts',
          subCatSearch: 'behavioranalysts',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Blood & Plasma Donation Centers',
          subCatSearch: 'blooddonation',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Body Contouring',
          subCatSearch: 'bodycontouring',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Cannabis Clinics',
          subCatSearch: 'cannabis_clinics',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Cannabis Tours',
          subCatSearch: 'cannabistours',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Cannabis Collective',
          subCatSearch: 'cannabiscollective',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Chiropractors',
          subCatSearch: 'chiropractors',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Colonics',
          subCatSearch: 'colonics',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Concierge Medicine',
          subCatSearch: 'conciergemedicine',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Counseling & Mental Health',
          subCatSearch: 'c_and_mh',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Psychologists',
          subCatSearch: 'psychologists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Sex Therapists',
          subCatSearch: 'sextherapists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Sports Psychologists',
          subCatSearch: 'sportspsychologists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Crisis Pregnancy Centers',
          subCatSearch: 'crisispregnancycenters',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Faith-based Crisis Pregnancy Centers',
          subCatSearch: 'faithbasedcpc',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Cryotherapy',
          subCatSearch: 'cryotherapy',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Dental Hygienists',
          subCatSearch: 'dentalhygienists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Dentists',
          subCatSearch: 'dentists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Cosmetic Dentists',
          subCatSearch: 'cosmeticdentists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Endodontists',
          subCatSearch: 'endodontists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'General Dentistry',
          subCatSearch: 'generaldentistry',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Oral Surgeons',
          subCatSearch: 'oralsurgeons',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Pediatric Dentists',
          subCatSearch: 'pediatric_dentists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Periodontists',
          subCatSearch: 'periodontists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Diagnostic Servies',
          subCatSearch: 'diagnosticservices',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Diagnostic Imaging',
          subCatSearch: 'diagnosticimaging',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Laboratory Testing',
          subCatSearch: 'laboratorytesting',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Dialysis Clinics',
          subCatSearch: 'dialysisclinics',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Dietitians',
          subCatSearch: 'dietitians',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Doctors',
          subCatSearch: 'physicians',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Addition Medicine',
          subCatSearch: 'addictionmedicine',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Allergists',
          subCatSearch: 'allergist',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Anesthesiologists',
          subCatSearch: 'anesthesiologists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Audiologist',
          subCatSearch: 'audiologist',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Cardiologists',
          subCatSearch: 'cardiology',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Cosmetic Surgeons',
          subCatSearch: 'costmeticsurgeons',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Dermatologists',
          subCatSearch: 'dermatology',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Ear Nose & Throat',
          subCatSearch: 'earnosethroat',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Emergency Medicine',
          subCatSearch: 'emergencymedicine',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Endocrinologists',
          subCatSearch: 'endocrinologists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Family Practice',
          subCatSearch: 'familydr',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Fertility',
          subCatSearch: 'fertility',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Gastroenterologist',
          subCatSearch: 'gastroenterologist',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Geneticists',
          subCatSearch: 'geneticists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Gerontologists',
          subCatSearch: 'gerentologist',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Hepatologists',
          subCatSearch: 'hepatologists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Hospitalists',
          subCatSearch: 'hospitalists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Immunodermatologists',
          subCatSearch: 'immunodermatologists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Infectious Disease Specialists',
          subCatSearch: 'infectiousdisease',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Internal Medicine',
          subCatSearch: 'internalmed',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Naturopathic/Holistic',
          subCatSearch: 'naturopathic',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Nephrologists',
          subCatSearch: 'nephrologists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Neurologist',
          subCatSearch: 'neurologist',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Neuropathologists',
          subCatSearch: 'neuropathologists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Neurotologists',
          subCatSearch: 'neurotologists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Obstetrics & Gynocologists',
          subCatSearch: 'obgyn',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Oncologist',
          subCatSearch: 'oncologist',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Ophthalmologists',
          subCatSearch: 'opthamalogists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Retina Specialists',
          subCatSearch: 'retinaspecialists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Orthopedists',
          subCatSearch: 'orthopedists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Osteopathic Physicians',
          subCatSearch: 'osteopathicphysicians',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Otologists',
          subCatSearch: 'otologists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Pain Management',
          subCatSearch: 'painmanagement',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Pathologists',
          subCatSearch: 'pathologists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Pediatricians',
          subCatSearch: 'pediatricians',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Phlebologists',
          subCatSearch: 'phlebologists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Plastic Surgeons',
          subCatSearch: 'plasticsurgeons',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Podiatrists',
          subCatSearch: 'podiatrists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Preventive Medicine',
          subCatSearch: 'preventivemedicine',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Proctologists',
          subCatSearch: 'proctologist',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Psychiatrists',
          subCatSearch: 'psychiatrists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Pulmonologist',
          subCatSearch: 'pulmonologist',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Radiologists',
          subCatSearch: 'radiologists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Rheumatologists',
          subCatSearch: 'rheumatologists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Spine Surgeons',
          subCatSearch: 'spinesurgeons',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Sports Medicine',
          subCatSearch: 'sportsmedicine',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Surgeons',
          subCatSearch: 'surgeons',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Tattoo Removal',
          subCatSearch: 'tattooremoval',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Toxicologists',
          subCatSearch: 'toxicologists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Undersea/Hyperbaric Medicine',
          subCatSearch: 'underseamedicine',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Urologists',
          subCatSearch: 'urologists',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
        },
        {
          subCatName: 'Vascular Medicine',
          subCatSearch: 'vascularmedicine',
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: 4
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
