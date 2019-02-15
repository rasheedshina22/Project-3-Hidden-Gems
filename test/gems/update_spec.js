/* global api, describe, it, expect, beforeEach */

const Gems= require('../../models/gem')
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config/environment')

const { gemsData, userData } = require('../mock_data')

let token, gem

describe('PUT /gems/:id', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Gems.remove({})
    ])
      .then(() => Promise.props({
        gem: Gems.create(gemsData[0]),
        user: User.create(userData)
      }))
      .then(data => {
        gem = data.gem
        token = jwt.sign({ sub: data.user._id }, secret, { expiresIn: '5m' })
      })
      .then(done)
  })

  it('should return a 401 response', done => {
    api
      .put(`/api/gems/${gem._id}`)
      .expect(401, done)
  })

  it('should return a 200 response with a token', done => {
    api
      .put(`/api/gems/${gem._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send(gemsData[0])
      .expect(200, done)
  })

  it('should return a gem', done => {
    api
      .put(`/api/gems/${gem._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send(gemsData[0])
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        expect(res.body).to.include.keys([
          '_id',
          'name',
          'image',
          'description',
          'category',
          'location',
          'address'
        ])
        done()
      })
  })

  it('should return the correct data', done => {
    api
      .put(`/api/gems/${gem._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send(gemsData[0])
      .end((err, res) => {
        expect(res.body.name).to.eq(gemsData[0].name)
        expect(res.body.image).to.eq(gemsData[0].image)
        expect(res.body.description).to.deep.eq(gemsData[0].description)
        expect(res.body.category).to.eq(gemsData[0].category)
        expect(res.body.location).to.deep.eq(gemsData[0].location)
        expect(res.body.address).to.eq(gemsData[0].address)
        done()
      })
  })
})
