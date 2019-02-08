const Gem = require('../models/gem')

function indexRoute(req, res) {
  Gem
    .find()
    .populate( {path: 'user', select: 'username'} )
    .then(gems => res.status(200).json(gems))
}

function createRoute(req, res) {
  Gem
    .create(req.body)
    .then(gem => res.status(201).json(gem))
    .catch(err => res.status(422).json(err.errors))
}

function showRoute(req, res) {
  Gem
    .findById(req.params.id)
    .then(gem => res.status(200).json(gem))
    .catch(err => res.status(422).json(err.errors))
}

function updateRoute (req, res) {
  Gem
    .findById(req.params.id) //finding gem by id passed in via the URL
    .then(gem => gem.set(req.body)) // set value of found gem to req body
    .then(gem => gem.save()) // saving gem to database
    .then(gem => res.status(200).json(gem)) // sending status and json response
    .catch(err => res.status(422).json(err.errors))
}

function deleteRoute (req, res) {
  Gem
    .findById(req.params.id)
    .then(gem => gem.remove())
    .then(() => res.sendStatus(204))
}

function commentCreateRoute(req, res, next) {
  req.body.user = req.currentUser
  Gem
    .findById(req.params.id)
    .then(gem => {
      gem.comments.push(req.body)
      return gem.save()
    })
    .then(gem => res.status(201).json(gem))
    .catch(next)
}

function commentDeleteRoute(req, res, next) {
  Gem
    .findById(req.params.id)
    .then(gem => {
      const comment = gem.comments.id(req.params.commentId)
      return comment.remove()
    })
    .then(gem => res.json(gem))
    .catch(next)
}


module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute,
  commentCreate: commentCreateRoute,
  commentDelete: commentDeleteRoute
}
