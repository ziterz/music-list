const { User } = require("../models/index")
const { encryptPass, decryptPass } = require("../helpers/bcrypt")
const { generateToken } = require("../helpers/jwt")

class UserController {
    static register(req, res, next) {
        let payload = {
            email: req.body.email,
            password: encryptPass(req.body.password)
        }

        User.create(payload)
            .then(result => {
                let user = {
                    id: result.id,
                    email: result.email
                }
                let token = generateToken(payload)
                res.status(201).json({
                    'id': user.id,
                    'email': user.email,
                    'access_token': token
                })
            }).catch(err => {
                res.status(500).json({ err })
                console.log(err)
            })


    }
    static login(req, res, next) {

    }
}

module.exports = UserController