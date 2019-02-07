const router = require('express').Router()
const gemsController = require('../controllers/gems')
// const authController = require('../controllers/auth')
//
// const secureRoute = require('../lib/secureRoute')

// router.route('/register')
//   .post(authController.register)
//
// router.route('/login')
//   .post(authController.login)
//
// router.route('/confirm/:code')
//   .get(authController.confirm)

router.route('/gems')
  .get(gemsController.index)
  .post(gemsController.create)

router.route('/gems/:id')
  .get(gemsController.show)
  .put(gemsController.update)
  .delete(gemsController.delete)


module.exports = router
