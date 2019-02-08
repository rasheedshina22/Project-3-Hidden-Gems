require('dotenv').config()

const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.Promise = Promise

const User = require('../models/user')
const Gem = require('../models/gem')
const Trip = require('../models/trip')

mongoose.connect(process.env.MONGODB_URI, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return Promise.props({
        user: User.create({
          username: 'Tom',
          email: 't@mail.com',
          password: 't',
          passwordConfirmation: 't'
        })
      })
    })
    .then((user) => {
      return Promise.props({
        gem1: Gem.create({
          name: 'Black Dragon',
          user: user._id,
          image: 'https://pbs.twimg.com/media/DXwnM9vXkAADfvm.jpg',
          description: 'Nice pub in Aldgate',
          category: 'Pub',
          location: {lat: 2, lon: 4}
        }),
        gem2: Gem.create({
          name: 'White Swan',
          user: user._id,
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/03/18/db/11/white-swan-restaurant.jpg',
          description: 'Brilliant restaurant',
          category: 'Restaurant',
          location: {lat: 2, lon: 4}
        })
      })
    })
    .then(user => {
      return Trip.create({
        name: 'Museum of Happiness',
        user: user._id,
        image: 'https://static1.squarespace.com/static/593e67221e5b6ca18cbebfac/t/59e3e548b07869a85b1e71a5/1546765976263/?format=1500w',
        description: 'The best museum ever',
        category: 'Museum',
        location: 'London',
        gems: [user.gem1,user.gem2]
      })
    })
    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
