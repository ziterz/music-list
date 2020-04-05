const router = require('express').Router()
const users = require('./UserRouter.js')
const musics = require('./MusicRouter.js')

router.use('/users', users)
router.use('/musics', musics)

module.exports = router