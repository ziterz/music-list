const router = require('express').Router()
const MusicController = require('../controller/MusicController.js')

router.get('/', MusicController.read)
router.post('/', MusicController.create)
router.delete('/:id', MusicController.delete)

module.exports = router