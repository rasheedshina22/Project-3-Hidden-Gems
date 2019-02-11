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
        name: 'Black Dragon',
        user: user._id,
        image: 'https://pbs.twimg.com/media/DXwnM9vXkAADfvm.jpg',
        description: 'Nice pub in Aldgate',
        category: 'Pubs',
        location: {lat: 51.5134382, lon: -0.0793599},
        address: '7, Monohaus, 143 Mare St, London E8 3FW'
      },{
        name: 'White Swan',
        user: user._id,
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/03/18/db/11/white-swan-restaurant.jpg',
        description: 'Brilliant restaurant',
        category: 'Restaurants',
        location: {lat: 51.5144682, lon: -0.0793569},
        address: '2 Station Rd, Teddington TW11 8EW'
      },{
        name: 'Black Dragon',
        user: user._id,
        image: 'https://pbs.twimg.com/media/DXwnM9vXkAADfvm.jpg',
        description: 'Nice pub in Aldgate',
        category: 'Pubs',
        location: {lat: 51.5134382, lon: -0.0793599},
        address: 'Showcase Complex, Redfield Way, Nottingham NG7 2UW'
      },{
        name: 'Nepali Food',
        user: user._id,
        image: 'https://static1.squarespace.com/static/5a45133832601e14c4a7d06e/t/5a4e9929005559236df8f0f9/1515120824769/photo.jpg',
        description: 'Best Food In the World',
        category: 'Restaurants',
        location: {lat: 51.5134382, lon: -0.0793599},
        address: '7, Monohaus, 143 Mare St, London E8 3FW'
      },{
        name: 'Nepali Food',
        user: user._id,
        image: 'https://mk0theadventuregfnyq.kinstacdn.com/wp-content/uploads/Types-of-climbing-3.jpg',
        description: 'nice mountain',
        category: 'Pubs',
        location: {lat: 51.5134382, lon: -0.0793599},
        address: ' 77-79 George St, Oxford OX1 2BQ'
      }])
        .then(gems => {
          return Trip.create({
            name: 'Museum of Happiness',
            user: user._id,
            image: 'https://static1.squarespace.com/static/593e67221e5b6ca18cbebfac/t/59e3e548b07869a85b1e71a5/1546765976263/?format=1500w',
            description: 'The best museum ever',
            category: 'Museum',
            location: 'London',
            gems: gems.map(gem => gem._id)
          })
        })
    })
    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
