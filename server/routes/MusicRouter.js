const router = require('express').Router()
const MusicController = require('../controller/MusicController.js')
const authentication = require('../middlewares/authentication.js')
const authorization = require('../middlewares/authorization.js')


router.get('/', authentication, MusicController.read)
console.log(`masuk create router`)
router.post('/', authentication, MusicController.create)
router.delete('/:id', authentication, authorization, MusicController.delete)

module.exports = router