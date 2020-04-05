const {User, Music} = require('../models')
const decrypt = require('../helper/decrypt')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
class UserController {

    static Register(req, res, next) {
        let {email, password} = req.body
        User.create({
            email,
            password
        })
            .then(function(result) {
                let payload = {
                    id: result.id,
                    email: result.email
                }
                return res.status(201).json(payload)
            })
            .catch(function(err) {
                next(err)
            })

    }

    static Login(req, res, next) {
        let {email, password} = req.body
        User.findOne({
            where: {
                email
            }
        })
            .then(function(result) {
                const status = bcrypt.compareSync(password, result.password)
                if(status) {
                    let payload = {
                        id: result.id,
                        email: result.email
                    }
                    let Access_Token = jwt.sign(payload, process.env.SECRET)

                    return res.status(200).json({
                        access_token: Access_Token
                    })

                }
            })

    }

    static GetMusic(req, res, next) {
        Music.findAll({
            where: {
                UserId: req.Authenticated.id
            }
        })
            .then(function(result) {
                return res.status(201).json(result)
            })
    }

}

module.exports = UserController