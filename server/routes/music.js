const router = require("express").Router()
const MusicController = require("../controllers/MusicController")

router.get("/", MusicController.get)
router.post("/", MusicController.create)

module.exports = router