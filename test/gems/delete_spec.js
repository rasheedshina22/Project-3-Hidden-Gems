/* global api, describe, it, expect, beforeEach */

const Gems = require('../../models/gem')
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config/environment')

const { gemsData, userData } = require('../mock_data')

let token, gem

describe('DELETE /gems/:id', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Gems.remove({})
    ])
      .then(() => Promise.props({
        gems: Gems.create(gemsData),
        user: User.create(userData)
      }))
      .then(data => {
        gem = data.gems[0]
        token = jwt.sign({ sub: data.user._id }, secret, { expiresIn: '5m' })
      })
      .then(done)
  })

  it('should return a 401 response', done => {
    api
      .delete(`/api/gems/${gem._id}`)
      .expect(401, done)
  })

  it('should return a 204 response with a token', done => {
    api
      .delete(`/api/gems/${gem._id}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(204, done)
  })

  it('should return no data', done => {
    api
      .delete(`/api/gems/${gem._id}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.body).to.be.empty
        done()
      })
  })
})
