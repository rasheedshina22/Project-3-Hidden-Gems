const Gem = require('../models/gem')

function indexRoute(req, res, next) {
  Gem
    .find()
    .populate( {path: 'user', select: 'username'} )
    .then(gems => res.status(200).json(gems))
    .catch(next)
}

function createRoute(req, res, next) {
  req.body.user = req.currentUser
  Gem
    .create(req.body)
    .then(gem => res.status(201).json(gem))
    .catch(next)
}

function showRoute(req, res, next) {
  Gem
    .findById(req.params.id)
    .populate(
      [{
        path: 'user'
      },{
        path: 'comments.user'
      }]
    )
    .then(gem => res.status(200).json(gem))
    .catch(next)
}

function updateRoute (req, res, next) {
  Gem
    .findById(req.params.id)
    .then(gem => gem.set(req.body))
    .then(gem => gem.save())
    .then(gem => res.status(200).json(gem))
    .catch(next)
}

function deleteRoute (req, res, next) {
  Gem
    .findById(req.params.id)

    .then(gem => gem.remove())
    .then(() => res.sendStatus(204))
    .catch(next)
}

function commentCreateRoute(req, res, next) {
  req.body.user = req.currentUser
  Gem
    .findById(req.params.id)
    .then(gem => {
      gem.comments.push(req.body)
      return gem.save()
    })
    .then(gem => Gem.populate(gem, { path: 'user comments.user' }))
    .then(gem => res.status(201).json(gem))
    .catch(next)
}

function commentDeleteRoute(req, res, next) {
  Gem
    .findById(req.params.id)
    .then(gem => {
      const comment = gem.comments.id(req.params.commentId)
      console.log(comment)
      comment.remove()
      return gem.save()

    })
    .then(gem => Gem.populate(gem, { path: 'user comments.user' }))
    .then(gem => res.status(201).json(gem))
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
