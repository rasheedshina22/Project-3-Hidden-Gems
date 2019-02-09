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

router.route('/gems')
  .get(gemsController.index)
  .post(secureRoute, gemsController.create)

router.route('/gems/:id')
  .get(gemsController.show)
  .put(secureRoute, gemsController.update)
  .delete(secureRoute, gemsController.delete)

router.post('/gems/:id/comments', secureRoute, gemsController.commentCreate)
router.delete('/gems/:id/comments/:commentId', secureRoute, gemsController.commentDelete)

router.route('/trips')
  .get(tripsController.index)
  .post(secureRoute, tripsController.create)

router.route('/trips/:id')
  .get(tripsController.show)
  .put(secureRoute, tripsController.update)
  .delete(secureRoute,tripsController.delete)

router.post('/trips/:id/comments', secureRoute, tripsController.commentCreate)
router.delete('/trips/:id/comments/:commentId', secureRoute, tripsController.commentDelete)

module.exports = router
