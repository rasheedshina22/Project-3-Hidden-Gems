require('dotenv').config()

const mongoose = require('mongoose')
const Promise = require('bluebird')
const { dbURI } = require('../config/environment')
mongoose.Promise = Promise

const User = require('../models/user')
const Gem = require('../models/gem')
const Trip = require('../models/trip')

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return User.create({
        username: 'Tom',
        email: 't@mail.com',
        password: 't',
        passwordConfirmation: 't'
      })
    })
    .then((user) => {
      return Gem.create([{
        name: 'Sky Garden',
        user: user._id,
        image: 'https://ucarecdn.com/478c2fa1-95f8-4314-8825-19a46984628f/587e487480b3a.jpg',
        description: 'The Sky Garden is a unique public space that spans three storeys and offers 360 degree uninterrupted views across the City of London. Visitors can wander around the exquisitely landscaped gardens, observation decks and an open air terrace of what is London\'s highest public garden.',
        category: 'Restaurants',
        location: {lat: 51.511203, lon: -0.0857297},
        address: '20 Fenchurch St, London EC3M 8AF'
      },{
        name: 'St. Paul\'s Cathedral',
        user: user._id,
        image: 'https://pbs.twimg.com/media/DXwnM9vXkAADfvm.jpg',
        description: 'Nice pub in Aldgate',
        category: 'Pubs',
        location: {lat: 51.538746, lon: -0.143074},
        address: '7, Monohaus, 143 Mare St, London E8 3FW'
      },{
        name: 'St. Paul\'s Cathedral',
        user: user._id,
        image: 'https://www.wallsauce.com/uploads/wallsauce-com/images/products/web/nick-jackson/large/night-falls-over-st.-paul-s-cathedral,-london.jpg',
        description: 'St. Paul\'s Cathedral is an iconic part of London\'s skyline. After being destroyed four times throughout history, the current cathedral – designed by Christopher Wren – has lived through three centuries, and its dome is the second largest in the world at 366 feet high.',
        category: 'Religious Sites',
        location: {lat: 51.5138486, lon: -0.1005393},
        address: 'St. Paul\'s Churchyard, London EC4M 8AD'
      },{
        name: 'London Eye',
        user: user._id,
        image: 'https://www.divento.com/14151/the-london-eye-all-year.jpg',
        description: 'The London Eye is one of the more famous structures rising on the landscape of London. It is an enormous Ferris wheel that sits on the south bank of the River Thames. It is on the west end of Jubilee Gardens on the South Bank and it stands roughly 135 metres in height.',
        category: 'Landmarks',
        location: {lat: 51.5327045, lon: -0.1507498},
        address: 'Lambeth, London SE1 7PB, UK'
      },{
        name: 'London Eye',
        user: user._id,
        image: 'https://pbs.twimg.com/media/DXwnM9vXkAADfvm.jpg',
        description: 'Nice pub in Aldgate',
        category: 'Pubs',
        location: {lat: 51.528031, lon: -0.085656},
        address: 'Showcase Complex, Redfield Way, Nottingham NG7 2UW'
      },{
        name: 'Regent\'s Park',
        user: user._id,
        image: 'https://www.mutualart.com/Images/2011_10/18/12/124409779/586e086f-c5a5-4707-a481-97f054075e4b_570.Jpeg',
        description: 'The Regent\'s Park combines large open spaces with tree-lined pathways, formal gardens, and four children’s playgrounds. It has excellent sports facilities, and contains central London’s largest outdoor sports area.',
        category: 'Parks',
        location: {lat: 51.5313, lon: -0.1570},
        address: 'Chester Rd, London NW1 4NR'
      },{
        name: 'The Sheep Heid Inn',
        user: user._id,
        image: 'https://absolutely.london/wp-content/uploads/2018/02/Untitled-1-2-1068x712.jpg',
        description: 'The Sheep Heid Inn is a premium pub, bar, and restaurant with its very own courtyard, centrally located in the heart of the picturesque town of Edinburgh',
        category: 'Restaurants',
        location: {lat: 55.942004, lon: -3.150730},
        address: '43-45 The Causeway, Edinburgh EH15 3QA'
      },{
        name: 'Urquhart Castle',
        user: user._id,
        image: 'https://www.rabbies.com/application/files/8414/8491/8176/LNESS3_1200_X_491.jpg',
        description: 'The castle, situated on a headland overlooking Loch Ness, is one of the largest in Scotland in area. It was approached from the west and defended by a ditch and drawbridge.',
        category: 'Landmarks',
        location: {lat: 57.3241399, lon: -4.4441899},
        address: ' Drumnadrochit, Inverness IV63 6XJ'
      },
      {
        name: 'Dan & Decarlo',
        user: user._id,
        image: 'https://cdn.wallpaper.com/main/legacy/gallery/17052978/RM-Starbucks-Amsterdam-Bank-017.jpg',
        description: 'Breakfast, grills and burgers in arts centre cafe set in a former chapel with its own rear garden.',
        category: 'Cafes',
        location: {lat: 48.4784702, lon: 4.1089442},
        address: '17 Rue de l\'Orme, 10700 Saint-Remy-sous-Barbuise, France'
      },
      {
        name: 'Passeart Espace D\'art Contemporain',
        user: user._id,
        image: 'https://images.unsplash.com/photo-1514195385834-0853a6eda41c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        description: 'Passeart is a contemporary art exhibition space located in TROYES, in the heart of the city, Place Saint Rémy.PASSEART is also a place of exchange and training.',
        category: 'Galleries',
        location: {lat: 48.2993253, lon: 4.0736781},
        address: '15 Rue Passerat, 10000 Troyes, France'
      },
      {
        name: 'Next one',
        user: user._id,
        image: 'https://seda.college/wp-content/uploads/1499034853348.jpg',
        description: 'Passeart is a contemporary art exhibition space located in TROYES, in the heart of the city, Place Saint Rémy.PASSEART is also a place of exchange and training.',
        category: 'Galleries',
        address: '15 Rue Passerat, 10000 Troyes, France',
        location: {lat: 48.2993253, lon: 4.0736781}
      },
      {
        name: 'Next one',
        user: user._id,
        image: 'https://mk0theadventuregfnyq.kinstacdn.com/wp-content/uploads/Types-of-climbing-3.jpg',
        description: 'nice mountain',
        category: 'Pubs',
        location: {lat: 51.580605, lon: 0.180915},
        address: ' 77-79 George St, Oxford OX1 2BQ'
      }])

        .then(gems => {
          return Trip.create({
            name: 'Sunday Afternoon Sights',
            user: user._id,
            image: 'https://absolutely.london/wp-content/uploads/2017/06/Gordons-hero-1068x712.jpg',
            description: 'Established in 1890, Gordon\'s Wine Bar is possibly the oldest wine bar in London. Still family run, signs of the bar\'s long history can be found everywhere, from the cellar and candlelit tables, to the aged wooden walls covered in memorabilia and old newspaper cuttings.',
            category: 'Sunday Trips',
            location: 'London',
            gems: [gems[0]._id, gems[1]._id, gems[2]._id]
          },
          {name: 'Busy Mid Week Treat',
            user: user._id,
            image: 'https://static1.squarespace.com/static/516ee454e4b0915f11da11cb/t/5b449a31575d1f575c33049e/1531221773180/notes-coffee-day-2-JustinDeSouza-15.jpg',
            description: 'Notes is a collection of coffee shops and bars serving Notes speciality coffee, craft beers, well-chosen wines and classic cocktails, all with a signature Notes twist. We also offer delicious seasonally-inspired food throughout the day, to eat in or takeaway. ',
            category: 'Sunday Trips',
            location: 'London',
            gems: [gems[0]._id , gems[3]._id]
          },
          {name: 'Historycal Trip',
            user: user._id,
            image: 'https://vignette.wikia.nocookie.net/theenemy/images/d/de/Natural-history-museum.jpg/revision/latest?cb=20180106202456',
            description: 'The Natural History Museum in London is a natural history museum that exhibits a vast range of specimens from various segments of natural history. It is one of three major museums on Exhibition Road in South Kensington, the others being the Science Museum and the Victoria and Albert Museum. ',
            category: 'Sunday Trips',
            location: 'London',
            gems: [gems[1]._id, gems[2]._id]
          },
          {name: 'Lock Ness Trip',
            user: user._id,
            image: 'https://thewallpaper.co/wp-content/uploads/2016/03/mirror-lake-high-resolution-wallpaper-download-mirror-lake-photos-free-cool-colours-screen-1920x1200-768x480.jpg',
            description: 'Loch Ness is a large, deep, freshwater loch in the Scottish Highlands extending for approximately 37 kilometres southwest of Inverness. Its surface is 16 metres above sea level. Loch Ness is best known for alleged sightings of the cryptozoological Loch Ness Monster, also known affectionately as "Nessie". ',
            category: 'Weekend Trips',
            location: 'Edinburgh',
            gems: [gems[5]._id, gems[6]._id]
          },
          {name: 'Scottish Tour',
            user: user._id,
            image: 'https://blogs.library.duke.edu/bitstreams/files/2015/08/duke-chapel-960x576.jpg',
            description: 'Rosslyn Chapel, formally known as the Collegiate Chapel of St Matthew, is a 15th-century chapel located in the village of Roslin, Midlothian, Scotland. Rosslyn Chapel was founded on a small hill above Roslin Glen as a Catholic collegiate church in the mid-15th century. ',
            category: 'Weekend Trips',
            location: 'Edinburgh',
            gems: [gems[4]._id, gems[5]._id]
          },
          {name: 'Caravan Holiday around France',
            user: user._id,
            image: 'https://images.unsplash.com/photo-1540500754616-370738ad6c21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=815&q=80',
            description: 'On a flowery island, on the Aube river, the camping de l\'île Cherlieu proposes you to choose your place yourself in the camp in the shade of trees or not.This quiet camp, at the entrance of the village of Arcis-sur-Aube, has a sport area, it is near a sandy beach and a pebble beach, you will have the opportunity to make white-water rafting or kayaking.Escape holiday are available to you, while keeping contact with the world thanks to a wifi access on 80% of the camp and the proximity with shops of Arcis sur Aube. ',
            category: 'Caravan Trips',
            location: 'Arcis-sur-Aube',
            gems: [gems[6]._id, gems[7]._id]
          }
          )
        })
    })
    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
