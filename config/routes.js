const router = require('express').Router()

const secureRoute = require('../lib/secureRoute')
const authController = require('../controllers/auth')
const usersController = require('../controllers/users')
const gemsController = require('../controllers/gems')
const tripsController = require('../controllers/trips')

router.post('/register', authController.register)
router.post('/login', authController.login)

router.route('/users')
  .get(usersController.index)
  .post(secureRoute, usersController.create)

router.route('/users/:id')
  .get(usersController.show)
  .put(secureRoute, usersController.update)
  .delete(secureRoute, usersController.delete)

router.route('/gems')
  .get(gemsController.index)
  .post(secureRoute, gemsController.create)

router.route('/gems/:id')
  .get(gemsController.show)
  .put(secureRoute, gemsController.update)
  .delete(secureRoute, gemsController.delete)

router.route('/trips')
  .get(tripsController.index)
  .post(secureRoute, tripsController.create)

router.route('/trips/:id')
  .get(tripsController.show)
  .put(secureRoute, tripsController.update)
  .delete(secureRoute, tripsController.delete)

router.post('/trips/:id/comments', secureRoute, tripsController.commentCreate)
router.delete('/trips/:id/comments/:commentId', secureRoute, tripsController.commentDelete)

module.exports = router
