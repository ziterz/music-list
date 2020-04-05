const router = require('express').Router()
const musicRouter = require('./music')
const userRouter = require('./user')

router.use('/musics', musicRouter)
router.use('/users', userRouter)

module.exports = router