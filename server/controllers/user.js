const {User} = require('../models/index')
const {decryptPassword} = require("../helper/bcyript")
const {generateToken} = require("../helper/jwt")

class UserController {
    static register (req, res) {
        let payload = {
            email : req.body.email, 
            password: req.body.password
        }
        User.create(payload)
        .then(result => {
            let user = {
                id : result.id,
                email: result.email
            }
            let token = generateToken(user)
            res.status(201).json({
                id: user.id,
                email: user.email
            })
        })
        .catch(err => {
            res.status(500).json({
                "error register": err
            })
        })

    }

    static login (req, res, next) {
        res.send("TES login")
    }

}
module.exports = UserController