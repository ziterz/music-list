const router = require('express').Router()
const controller_user = require('../controllers/controller_user.js')

router.post('/signup', controller_user.signup)
router.post('/signin', controller_user.signin)

module.exports = router