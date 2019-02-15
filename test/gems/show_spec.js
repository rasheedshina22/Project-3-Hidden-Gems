/* global api, describe, it, expect, beforeEach */

const Gems = require('../../models/gem')
const User = require('../../models/user')

const { gemsData} = require('../mock_data')

let gem

describe('GET /gems/:id', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Gems.remove({})
    ])
      .then(() => Gems.create(gemsData))
      .then(gems => gem = gems[0])
      .then(() => done())
  })

  it('should return a 200 response', done => {
    api
      .get(`/api/gems/${gem._id}`)
      .expect(200, done)
  })

  it('should return a gem', done => {
    api
      .get(`/api/gems/${gem._id}`)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        expect(res.body).to.include.keys([
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
      .get(`/api/gems/${gem._id}`)
      .end((err, res) => {
        expect(res.body.name).to.eq(gemsData[0].name)
        expect(res.body.image).to.eq(gemsData[0].image)
        expect(res.body.location).to.deep.eq(gemsData[0].location)
        expect(res.body.description).to.eq(gemsData[0].description)
        expect(res.body.category).to.eq(gemsData[0].category)
        expect(res.body.address).to.eq(gemsData[0].address)
        done()
      })
  })
})
