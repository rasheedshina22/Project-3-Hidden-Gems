/* global api, describe, it, beforeEach, expect */

const Gem = require('../../models/gem')
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const {secret} = require('../../config/environment')

const { gemsData, userData } = require('../mock_data')

let token

describe('POST/gems', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Gem.remove({})
    ])
      .then(() => User.create(userData))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
      })
      .then(done)
  })

  it('should return a 401 response', (done) => {
    api.post('/api/gems')
      .send(gemsData)
      .expect(401, done)
  })
  it('should return a 201 response', (done) => {
    api.post('/api/gems')
      .set('Authorization', `Bearer ${token}`)
      .send(gemsData[0])
      .expect(201, done)
  })

  it('should return the created gem', (done) => {
    api.post('/api/gems')
      .set('Authorization', `Bearer ${token}`)
      .send(gemsData[0])
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        expect(res.body).to.include.keys([
          'name',
          'user',
          'image',
          'description',
          'category',
          'location',
          'address',
          'comments'
        ])
      })
    done()
  })


  it('should return the correct data', done => {
    api
      .post('/api/gems')
      .set('Authorization', `Bearer ${token}`)
      .send(gemsData[0])
      .end((err, res) => {
        expect(res.body.name).to.eq(gemsData[0].name)
        expect(res.body.image).to.eq(gemsData[0].image)
        expect(res.body.description).to.eq(gemsData[0].description)
        expect(res.body.category).to.eq(gemsData[0].category)
        expect(res.body.location).to.deep.eq(gemsData[0].location)
        expect(res.body.address).to.eq(gemsData[0].address)
        done()
      })
  })
})
