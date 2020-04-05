const router = require("express").Router()
const userRoutes = require("./user")
const musicRoutes = require("./music")
router.use(userRoutes)
router.use(musicRoutes)
module.exports = router.use