const router = require('express').Router()
const UserController = require('../controller/UserController.js')

// router.use('/', UserController.read)
router.use('/register', UserController.register)
router.use('/login', UserController.login)

module.exports = router