const User = require('../models/user')
const jwt = require('jsonwebtoken')

function registerRoute(req, res, next) {
  User.create(req.body)
    .then(() => res.status(201).json({ message: 'Registration successful' }))
    .catch(next)
}

function loginRoute(req, res, next) {
  User.findOne({ email: req.body.email })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized' })
      }
      const payload = { sub: user._id }
      const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '6h' })
      res.json({
        token,
        message: `Welcome back ${user.username}!`
      })
    })
    .catch(next)
}

function userShow(req, res, next){
  User
    .findById(req.params.id)
    .populate('gems trips follows following')
    .then(user => res.json(user))
    .catch(next)
}

function followUser(req, res, next){
  User
    .findById(req.params.id)
    .then(user => {
      user.follows.push(req.params.follow)
      return user.save()
    })
    .then(user => User.populate(user, { path: 'gems trips follows following' }))
    .then(user => res.status(201).json(user))
    .catch(next)
}

module.exports = {
  register: registerRoute,
  login: loginRoute,
  user: userShow,
  follow: followUser
}
