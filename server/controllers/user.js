const {User} = require('../models/index')
class UserController {
    static register (req, res, next) {
        res.send("TES regist")

    }

    static login (req, res, next) {
        res.send("TES login")
    }

}
module.exports = UserController