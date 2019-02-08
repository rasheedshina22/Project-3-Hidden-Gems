const Trip = require('../models/trip')

function indexRoute(req, res) {
  Trip
    .find()
    .then(trips => res.status(200).json(trips))
}

function createRoute(req, res) {
  Trip
    .create(req.body)
    .then(trip => res.status(201).json(trip))
    .catch(err => res.status(422).json(err.errors))
}

function showRoute(req, res) {
  Trip
    .findById(req.params.id)
    .then(trip => res.status(200).json(trip))
    .catch(err => res.status(422).json(err.errors))
}

function updateRoute (req, res) {
  Trip
    .findById(req.params.id)
    .then(trip => trip.set(req.body))
    .then(trip => trip.save())
    .then(trip => res.status(200).json(trip))
    .catch(err => res.status(422).json(err.errors))
}

function deleteRoute (req, res) {
  Trip
    .findById(req.params.id)
    .then(trip => trip.remove())
    .then(() => res.sendStatus(204))
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
}
