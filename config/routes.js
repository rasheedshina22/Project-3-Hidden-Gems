const router = require('express').Router()
const gemsController = require('../controllers/gems')
const tripsController = require('../controllers/trips')
const authController = require('../controllers/auth')
//
const secureRoute = require('../lib/secureRoute')

router.route('/register')
  .post(authController.register)

router.route('/login')
  .post(authController.login)
//
// router.route('/confirm/:code')
//   .get(authController.confirm)

router.route('/register')
  .post(authController.register)

router.route('/login')
  .post(authController.login)

router.route('/gems')
  .get(gemsController.index)
  .post(gemsController.create)

router.route('/gems/:id')
  .get(gemsController.show)
  .put(gemsController.update)
  .delete(gemsController.delete)

router.post('/gems/:id/comments', secureRoute, gemsController.commentCreate)
router.delete('/gems/:id/comments/:commentId', gemsController.commentDelete)

router.route('/trips')
  .get(tripsController.index)
  .post(tripsController.create)

router.route('/trips/:id')
  .get(tripsController.show)
  .put(tripsController.update)
  .delete(tripsController.delete)

// router.post('/trips/:id/comments', secureRoute, tripsController.commentCreate)
// router.delete('/trips/:id/comments/:commentId', tripsController.commentDelete)

module.exports = router
