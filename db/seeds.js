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
        image: 'http://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png',
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
        name: 'Regent\'s Park',
        user: user._id,
        image: 'https://images.unsplash.com/photo-1459508583695-86e229e8855a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
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
        image: 'https://images.unsplash.com/photo-1541855148-b3bb8f814fe4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80',
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
        name: 'St Michael\'s Mount',
        user: user._id,
        image: 'https://images.unsplash.com/photo-1493672044531-efdb1aa01b8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
        description: 'St Michael\'s Mount (Cornish: Karrek Loos yn Koos, meaning "hoar rock in woodland") is a small tidal island in Mount\'s Bay, Cornwall, England, United Kingdom. The island is a civil parish and is linked to the town of Marazion by a man-made causeway of granite setts, passable between mid-tide and low water',
        category: 'Viewpoints',
        location: {lat: 50.1175691, lon: -5.4822363},
        address: 'St Michaels Mount, Marazion, TR170HS '
      },
      {
        name: 'Camel Trail',
        user: user._id,
        image: 'https://images.unsplash.com/photo-1532612821865-8cc3cb888f3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
        description: 'The Camel Trail is an 18 mile largely traffic free, surfaced and virtually level multi use trail which provides access to the beautiful Cornish countryside ',
        category: 'Landmarks',
        location: {lat: 50.5089749, lon: -4.9587513},
        address: ' Eddystone Rd, Wadebridge PL27 7AL'
      },
      {
        name: 'Nerja Beaches',
        user: user._id,
        image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        description: 'Nerja is a resort town along southern Spain\'s Costa del Sol. Its seafront promenade, Balcón de Europa, tops a promontory with views of the Mediterranean and surrounding mountains.',
        category: 'Landmarks',
        location: {lat: 36.7497316, lon: -3.870516},
        address: ' Camino de Burriana, s/n, 29780 Nerja, Málaga, Spain'
      },
      {
        name: 'Café Fresco',
        user: user._id,
        image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
        description: 'Hip, garden shed-style branch of small cafe chain for artisan coffee, plus sandwiches and cakes. ',
        category: 'Cafes',
        location: {lat: 36.1477101, lon: -5.35555},
        address: ' Ocean Village Promenade 33, Gibraltar'
      },
      {
        name: 'Camping Jungfrau Holiday Park',
        user: user._id,
        image: 'https://images.unsplash.com/photo-1506535995048-638aa1b62b77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        description: 'Nestled in a valley of lush greenery in Switzerland, Jungfrau is one of Europe\'s most beautiful campsites offering the authentic alpine atmosphere.',
        category: 'Landmarks',
        location: {lat: 46.588744, lon: -7.906073},
        address: 'Weid 406, 3822 Lauterbrunnen, Switzerland'
      },
      {
        name: 'Camping Lazy Rancho 4',
        user: user._id,
        image: 'https://images.unsplash.com/photo-1532876924456-d6460f2f56a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        description: 'Campsite Lazy-Rancho 4 is a campsite in Unterseen, Bern, located a river/stream.The campsite has which are marked out and pitches with some shade. It is possible to rent hikers\' cabins and bungalows. The campsite has a playground. ',
        category: 'Landmarks',
        location: {lat: 46.6860467, lon: 7.8286186},
        address: ' Lehnweg 6, 3800 Unterseen, Switzerland'
      },
      {
        name: 'The Old Joint Stock',
        user: user._id,
        image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
        description: 'Victorian bank building, now home to a theatre and pub with an island bar below a glass-domed roo',
        category: 'Pubs',
        location: {lat: 52.480799, lon: -1.902177},
        address: '4 Temple Row W, Birmingham B2 5NY'
      },
      {
        name: 'Bacchus Bar',
        user: user._id,
        image: 'https://images.unsplash.com/photo-1521394573970-cdcef757fddd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1046&q=80',
        description: 'Cask ales and a crowd-pleasing menu in a plush venue with vaulted ceilings and dark wood tables.',
        category: 'Pubs',
        location: {lat: 52.4788598, lon: -1.9008796},
        address: 'Burlington Arcade, New St, Birmingham B2 4JH'
      },
      {
        name: 'Santiago de Compostela Cathedral',
        user: user._id,
        image: 'https://images.unsplash.com/photo-1532726858233-f3c23319edc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        description: 'The Cathedral of Santiago de Compostela is part of the Roman Catholic Archdiocese of Santiago de Compostela and is an integral component of the Santiago de Compostela World Heritage Site in Galicia, Spain. The cathedral is the reputed burial place of Saint James the Great, the apostles of Jesus Christ.',
        category: 'Religious Sites',
        location: {lat: 42.8805962, lon: -8.5468352},
        address: 'Praza do Obradoiro, s/n, 15704 Santiago de Compostela, A Coruña, Spain'
      },
      {
        name: 'Buckingham Palace',
        user: user._id,
        image: 'https://www.royal.uk/sites/default/files/images/feature/buckingham-palace.jpg',
        description: 'Buckingham Palace is the London residence and administrative headquarters of the monarch of the United Kingdom. Located in the City of Westminster, the palace is often at the centre of state occasions and royal hospitality. It has been a focal point for the British people at times of national rejoicing and mourning.',
        category: 'Landmarks',
        location: {lat: 51.501364, lon: -0.144084},
        address: 'Westminster, London SW1A 1AA'
      }])

        .then(gems => {
          return Trip.create({
            name: 'Sunday Afternoon Sights',
            user: user._id,
            image: 'https://absolutely.london/wp-content/uploads/2017/06/Gordons-hero-1068x712.jpg',
            description: 'Take a sightseeing tour of London and learn from experts as they show you the city\'s best attractions and famous landmarks',
            category: 'Sunday Trips',
            location: 'London',
            gems: [gems[0]._id, gems[1]._id, gems[2]._id]
          },
          {name: 'Historical Trip',
            user: user._id,
            image: 'https://vignette.wikia.nocookie.net/theenemy/images/d/de/Natural-history-museum.jpg/revision/latest?cb=20180106202456',
            description: 'Find out more about our history through our tours.',
            category: 'Family Trips',
            location: 'London',
            gems: [gems[1]._id, gems[2]._id , gems[17]._id]
          },
          {name: 'Lock Ness ',
            user: user._id,
            image: 'https://thewallpaper.co/wp-content/uploads/2016/03/mirror-lake-high-resolution-wallpaper-download-mirror-lake-photos-free-cool-colours-screen-1920x1200-768x480.jpg',
            description: 'With this rare trip you have the chance of visiting Loch Ness. Loch Ness is best known for alleged sightings of the cryptozoological Loch Ness Monster, also known affectionately as "Nessie". ',
            category: 'Rare Trips',
            location: 'Edinburgh',
            gems: [gems[5]._id, gems[6]._id]
          },
          {name: 'Discovering Scotland',
            user: user._id,
            image: 'https://blogs.library.duke.edu/bitstreams/files/2015/08/duke-chapel-960x576.jpg',
            description: 'A wide range of itineraries and days out for your holiday in Scotland.',
            category: 'Weekend Trips',
            location: 'Edinburgh',
            gems: [gems[4]._id, gems[5]._id]
          },
          {name: 'Caravan Holiday around France',
            user: user._id,
            image: 'https://images.unsplash.com/photo-1540500754616-370738ad6c21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=815&q=80',
            description: 'France is a fantastic country for an unforgettable camping holiday, and for good reason. With gorgeous sandy beaches, cool lakes, stunning mountain ranges and beautiful cities we can see why it’s the most visited country in the world.',
            category: 'Caravan Trips',
            location: 'Arcis-sur-Aube',
            gems: [gems[6]._id, gems[7]._id]
          },
          {name: 'Cycle around Cornwall',
            user: user._id,
            image: 'https://images.unsplash.com/photo-1510135649765-8f3a1921bb1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80',
            description: 'Get out and explore Cornwall\'s amazing cycling routes while discovering wildlife, heritage and parts of Cornwall you never knew existed. ',
            category: 'Cycling Trips',
            location: 'Newquay',
            gems: [gems[8]._id, gems[9]._id]
          },
          {name: 'Road Trip discovering Spain',
            user: user._id,
            image: 'https://images.unsplash.com/photo-1529225596519-1262d0bfc242?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            description: 'Pick up a hire car and drive east along the coast so that you can discover Spain.',
            category: 'Road Trips',
            location: 'Nerja',
            gems: [gems[10]._id, gems[11]._id,gems[16]._id]
          },
          {name: 'Camping in Switzerland',
            user: user._id,
            image: 'https://images.unsplash.com/photo-1464547323744-4edd0cd0c746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            description: 'Camping in Switzerland is a fantastic activity, providing hours of enjoyment and a welcome opportunity to connect with loved ones, as well as nature',
            category: 'Camping Trips',
            location: 'Geneva',
            gems: [gems[12]._id, gems[13]._id]
          },
          {name: 'Pub Crawl in the Midlands',
            user: user._id,
            image: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
            description: 'Start a tour taking in several pubs or drinking places in the beautiful city of Birmingham',
            category: 'Pubs Crawl',
            location: 'Birmingham',
            gems: [gems[14]._id, gems[15]._id]
          }
          )
        })
    })
    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
