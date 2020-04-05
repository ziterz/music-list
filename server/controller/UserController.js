const models = require('../models')
const { generateToken } = require('../helpers/jwt.js')
const { decryptPassword } = require('../helpers/bcrypt.js')

class UserController {
    static read(req, res, next) {
        return models.User.findAll()
            .then(result => {
                return res.status(200).json({
                    Music: result
                })
            })
            .catch(err => {
                return next(err)
            })
    }

    static register(req, res, next) {
        const { email, password } = req.body
        const newData = { email, password }
        return models.User.create(newData)
            .then(result => {
                console.log(`berhasil ke register`)
                return res.status(201).json({
                        message: `Successfully register your account`
                    })
                    // let payload = {
                    //     id: result.id,
                    //     email: result.email
                    // }
                    // let token = generateToken(payload)
                    // return res.status(200).json({
                    //     id: payload.id,
                    //     email: payload.email,
                    //     token: token
                    // })
            })
            .catch(err => {
                return next(err)
            })
    }

    static login(req, res, next) {
        const { email, password } = req.body
        const data = { email, password }
        return models.User.findOne({ where: { email: email } })
            .then(result => {
                if (result) {
                    let compare = decryptPassword(password, result.password)
                    if (compare) {
                        let payload = {
                            id: result.id,
                            email: result.email
                        }
                        let token = generateToken(payload)
                        return res.status(200).json({
                            id: payload.id,
                            email: payload.email,
                            token: token
                        })
                    } else {
                        console.log(result)
                        return next({
                            name: 'BadRequest',
                            errors: [{ message: 'Invalid Email/Password!' }]
                        })
                    }
                } else {
                    return next({
                        name: 'BadRequest',
                        errors: [{ message: 'Invalid Email/Password!' }]
                    })
                }
            })
            .catch(err => {
                return next(err)
            })
    }
}

module.exports = UserController